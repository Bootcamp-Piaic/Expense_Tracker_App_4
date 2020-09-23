import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, setdescription] = useState('');

    const [transactionAmount, setTransactionAmount] = useState(0);

    const { AddTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000000),
            description: description,
            transactionAmount: +transactionAmount
        };
        AddTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                
                <div className='form-control'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='DESCRIPTION' placeholder='Detail of Transaction'
                        value={description}
                        onChange={(e) => { setdescription(e.target.value) }}></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='transactionamount'>Transaction Amount</label>
                    <input type='number' id='transactionamount'
                        placeholder='Enter Transaction Amount'
                        value={transactionAmount}
                        onChange={(e) => { setTransactionAmount(e.target.value) }}></input>
                </div>
                <button className='btn'>Add Transaction</button>
                
                <div className='container'>
                    <label htmlFor='GuideLines'>GuideLines</label>
                    <p>For <strong>Income </strong>Add  Positive Values like  10,20 etc</p>
                    <p>For <strong>Expense </strong>Add Negative Values like -10,-20 etc</p>
                </div>
            </form>
        </div>
    )
}
