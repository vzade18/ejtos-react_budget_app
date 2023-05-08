import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleUpdateBudget= (newbudget) => {
        if(newbudget > 20000){
            alert("The value cannot exceed maximum limit of 20000");
            return;
        }
        else if(newbudget < totalExpenses){
            alert("ypu cannot reduce the budgetvalue lower than the spending");
            return;
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newbudget,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            Budget: {currency} <input 
            type="number"  
            id= "budget" 
            value={budget}
            onChange={(event) => handleUpdateBudget(event.target.value)} 
            step="10"
            style = {{width:"150px"}}></input>
        </div>
    );
};
export default Budget;
