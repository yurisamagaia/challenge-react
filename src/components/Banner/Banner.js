import React from "react";
import './Banner.scss';
import GroupOne from "../../assets/images/group-1.svg";
import GroupTwo from "../../assets/images/group-2.svg";
import Check from "../../assets/images/check.svg";
import ArrowDown from "../../assets/images/arrow-down.svg";
import Container from '@material-ui/core/Container';


const Banner = () => {
  
  const items = [
    { key: 1, label: "99,9% de disponibilidade: seu site sempre no ar" },
    { key: 2, label: "Suporte 24h, todos os dias" },
    { key: 3, label: "Painel de Controle cPanel" }
  ];

  const scrollToPlans = () => {
    document
      .getElementById('plans')
      .scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
  };

  return(
    <div className="container">
      <div className="container-banner">
        <div className="container-groups">
          <div align="left">
            <img src={GroupOne} alt="Grupo um" />
          </div>
          <div align="right">
            <img src={GroupTwo} alt="Grupo dois" />
          </div>
        </div>
        <div className="container-bg">
          <Container className="titles">
            <div className="title-1">
              Hospedagem de Sites
            </div>
            <div className="title-2">
              Tenha uma hospedagem de sites estável e evite perder visitantes diariamente
            </div>
            <div className="title-3">
            {items.map(({ key, label }) => (
              <div key={key}>
                <img src={Check} alt="Check" className="check" />
                {label}
              </div>
            ))}
            </div>
          </Container>
        </div>
        <div className="container-wave">
          <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="wave">
            <path d="M0.00,1.48 C264.67,113.97 314.33,-46.88 531.59,21.20 L500.00,0.00 L0.57,-0.48 Z" className="path"></path>
          </svg>
        </div>
        <div className="container-arrow">
          <img src={ArrowDown} alt="Arrow Down" onClick={scrollToPlans} />
        </div>
      </div>
    </div>
  )
}

export default Banner;