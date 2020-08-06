import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import './Plans.scss'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PlanoP from "../../assets/images/plan-1.svg";
import PlanoM from "../../assets/images/plan-2.svg";
import PlanoTurbo from "../../assets/images/plan-3.svg";
import Info from "../../assets/images/info.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";

const Plans = () => {

    const { selectedPlan } = useSelector(redux => redux.plans);
    const { selectedPeriod } = useSelector(redux => redux.period);
    const [itemSelected, setItemSelected] = useState(0);
    const itemsRef = useRef([]);

    useEffect(() => {
       itemsRef.current = itemsRef.current.slice(0, 2);
    }, []);

    const renderPlan = (value) => {
        switch (value) {
            case "Plano P":
                return PlanoP;
            case "Plano M":
                return PlanoM;
            case "Plano Turbo":
                return PlanoTurbo;
            default:
                return PlanoP;
        }
    };

    const priceFormat = (price) => {
        let priceFormated = new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return priceFormated.format(price);
    }

    const priceFormatDiscaount = (price) => {
        let priceFormated = new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return priceFormated.format(price - (price * 40) / 100);
    }
    
    const priceFormatMonth = (price, months) => {
        let priceFormated = new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return priceFormated.format((price - (price * 40) / 100) / months);
    }

    const priceSaved = (price) => {
        let priceFormated = new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return priceFormated.format((price * 40) / 100);
    }

    const moveCards = value => {
        if (value === 'next') {
            if (itemSelected < 2) {
                setItemSelected(itemSelected + 1)
                itemsRef.current[itemSelected + 1].scrollIntoView({ behavior: "smooth", block:"start" });
            }
        } else if (value === 'prev') {
            if (itemSelected > 0) {
                setItemSelected(itemSelected - 1)
                itemsRef.current[itemSelected - 1].scrollIntoView({ behavior: "smooth", block:"start" });
            }
        }
    };

    const hire = value => {
        window.location.href = "?a=add&pid="+value+"&billingcycle="+selectedPeriod+"&promocode=PROMOHG40"
    }
    
  return(
    <div className="containers">
      <div className="arrows">
        <div onClick={() => moveCards('prev')} className="arrow-left">
            <img alt="Plano" src={ArrowLeft} />
        </div>
        <div onClick={() => moveCards('next')} className="arrow-right">
            <img alt="Plano" src={ArrowRight} />
        </div>
      </div>
        <div className="container-plans" id="plans">
            {selectedPlan.map((plano, i) => (
                <div key={plano.id} ref={el => itemsRef.current[i] = el}  >
                    <Paper className={"plan " + (plano.name === 'Plano M' ? 'plan-selected' : '')}>
                        <Box component="div" align="center" className="plan-header">
                            <img alt="Plano" src={renderPlan(plano.name)} />
                            <Typography className="title">
                                {plano.name}
                            </Typography>
                        </Box>
                        <div className="separator"></div>
                        <Box component="div" align="center" className="plan-price">
                            <Typography className="price">
                                <span className="price-normal">R$ {priceFormat(plano.cycle[selectedPeriod].priceOrder)}</span>
                                <span className="price-discaount">R$ {priceFormatDiscaount(plano.cycle[selectedPeriod].priceOrder)}</span>
                            </Typography>
                            <Typography className="price-text-month">
                                equivalente a
                            </Typography>
                            <Typography className="price-month">
                                R$ <span>{priceFormatMonth(plano.cycle[selectedPeriod].priceOrder, plano.cycle[selectedPeriod].months)}</span>/mês*
                            </Typography>
                            <Button className={"price-hire " + (plano.name === 'Plano M' ? 'price-hire-selected' : '')} onClick={() => hire(plano.id)}>
                                Contrate Agora
                            </Button>
                            <Typography className="price-information">
                                <span>1 ano de Domínio Grátis <img alt="Informação" src={Info} /></span>
                            </Typography>
                            <Typography className="price-economy">
                                economize R$ {priceSaved(plano.cycle[selectedPeriod].priceOrder, plano.cycle[selectedPeriod])}
                                <span>40% OFF</span>
                            </Typography>
                        </Box>
                        <div className="separator"></div>
                        <Box component="div" align="left" className="plan-items">
                            <Typography className="items">
                                {plano.name === 'Plano P' ? 'Para 1 site' : 'Sites Ilimitados'}
                            </Typography>
                            <Typography className="items">
                                <b>100 GB</b> de Armazenamento
                            </Typography>
                            <Typography className="items">
                                Contas de E-mail <b> Ilimitadas</b>
                            </Typography>
                            <Typography className="items">
                                Criador de Sites <b><u>Grátis</u></b>
                            </Typography>
                            <Typography className="items">
                                Certificado SSL <b className={plano.name === 'Plano Turbo' ? 'underline' : ''}>Grátis</b> (HTTPS)
                            </Typography>
                        </Box>
                    </Paper>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans;