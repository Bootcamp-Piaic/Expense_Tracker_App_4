import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

   // console.log(transactions)
    const total_amounts_list = transactions.map(transaction => transaction.transactionAmount);
    //console.log(total_amounts_list)

    var Total_final_Amount=0;
    for(let amount of total_amounts_list){
        Total_final_Amount=Total_final_Amount+amount
    }
   // console.log(Total_final_Amount)
    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${Total_final_Amount.toFixed(2)}</h1>
        </div>
    )
}
