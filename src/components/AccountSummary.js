import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    const total_amounts_list = transactions.map(transaction => transaction.transactionAmount);

    var income=0;
    var expense=0;
    
    for(let amount of total_amounts_list){
        if (amount>0){
            income=income+amount
        }else{
            expense=expense+amount
        }
    }

    return (
        <div className='inc-exp-container'>

            <div>
                <h4>Income</h4>
                <p className='money plus'>
                    ${income.toFixed(2)}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>
                    ${expense.toFixed(2)}
                </p>
            </div>
        </div>
    )
}
