import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {

    const { DeleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>

            {transaction.description}

            <span>{transaction.transactionAmount < 0 ? '-' : '+'}${Math.abs(transaction.transactionAmount)}</span>
            <button className='delete-btn' onClick={() => DeleteTransaction(transaction.id)}>X</button>

        </li>

    )
}
