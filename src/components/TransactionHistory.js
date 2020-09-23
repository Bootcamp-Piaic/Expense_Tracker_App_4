import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionHistory = () => {
    
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className='list'>
               {
                   transactions.map(one_transaction=>(
                       <Transaction key={one_transaction.id} transaction={one_transaction}></Transaction>
                   ))
               }
            </ul>
        </div>
    )
}
