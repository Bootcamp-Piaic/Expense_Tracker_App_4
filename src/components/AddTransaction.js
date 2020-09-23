import React,{useState} from 'react';

export const AddTransaction = () => {

    const [DESCRIPTION,SETDESCRIPTION]=useState();

    const [TRANSACTIONAMOUNT,SETRANSACTIONAMOUNT]=useState();

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='DESCRIPTION' placeholder='Detail of Transaction'
                        value={DESCRIPTION}
                        onChange={(e) => { SETDESCRIPTION(e.target.value) }}></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='transactionamount'>Transaction Amount</label>
                    <input type='number' id='transactionamount'
                        placeholder='Enter Transaction Amount'
                        value={TRANSACTIONAMOUNT}
                        onChange={(e)=>{SETRANSACTIONAMOUNT(e.target.value)}}></input>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
