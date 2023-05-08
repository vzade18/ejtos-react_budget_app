import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

    return (
        <div className='Currency'>
        <select value={currency} 
        onChange={(event) => handleCurrencyChange(event.target.value)}
        className='Currency-select'
        menuPlacement='bottom'>
        <option className='Currency-option' value="$">$ Dollar</option>
        <option className='Currency-option' value="£">£ Pound</option>
        <option className='Currency-option' value="€">€ Euro</option>
        <option className='Currency-option' value="₹">₹ Ruppee</option>
      </select>
        </div>
    );

};
export default Currency;