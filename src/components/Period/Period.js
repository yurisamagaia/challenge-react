import React, { useState } from "react";
import './Period.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setPeriod } from '../../redux/actions/setPeriod';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const Period = () => {

  const dispatch = useDispatch();
  const [periodOptions] = useState([
    {
      id: 'triennially',
      name: '3 anos'
    }, {
      id: 'annually',
      name: '1 ano'
    }, {
      id: 'monthly',
      name: '1 mês'
    }
  ]);
  const { selectedPeriod } = useSelector(redux => redux.period);
  const handleClickPeriod = (event) => {
    dispatch(setPeriod(event.target.value))
  }

  return(
    <Container className="container-period">
      <FormControl component="fieldset" className="container-form">
        <FormLabel className="title">Quero pagar a cada:</FormLabel>
        <RadioGroup row aria-label="periods" name="periods" value={selectedPeriod} onChange={handleClickPeriod} className="radio-group">
          {periodOptions.map(period => (
            <FormControlLabel 
              key={period.id} 
              value={period.id} 
              control={<Radio color="primary" />} 
              label={period.name} 
              className={period.id === selectedPeriod ? "radio-button selected" : "radio-button"} />
          ))}
        </RadioGroup>
      </FormControl>
    </Container>
  )
}

export default Period;