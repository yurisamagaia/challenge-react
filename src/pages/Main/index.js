import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './styles.scss';
import Plans from '../../components/Plans/Plans';
import Period from '../../components/Period/Period';
import api from '../../services/api';
import { setPlans } from "../../redux/actions/setPlans";
import CircularProgress from '@material-ui/core/CircularProgress';

function Main() {

  const dispatch = useDispatch();
  const [currentPlans, setCurrentPlans] = useState();

  useEffect(() => {
    async function loadPlans() {
      if (!currentPlans) {
        const { data } = await api.get('/prices');
        const { products } = data.shared;
        const plansFilter = Object.values(products).filter((plan) => {
          return (plan.name === 'Plano P' || plan.name === 'Plano M' || plan.name === 'Plano Turbo');
        })
        dispatch(setPlans(plansFilter))
        setCurrentPlans(plansFilter);
      }
    }
    loadPlans();
  });

    
  return(
    <div>
      <Period />
      {currentPlans ? (
        <Plans />
      ) : (
        <div className="box-progress">
          <CircularProgress className="progress" />
        </div>
      )}
    </div>
  )
}

export default Main;