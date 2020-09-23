import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//create initial state like json object
const InitialState = {
    transactions: [
        // { id: 1, description: "Income 1", transactionAmount: 100 },
        // { id: 2, description: "Expense 1", transactionAmount: -10 },
        // { id: 3, description: "Income 2", transactionAmount: 500 },
        // { id: 4, description: "Expense 2", transactionAmount: -200 }
    ]
}

// creating context
export const GlobalContext = createContext(InitialState)

// creating provider for global context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState);

    function AddTransaction(newTransaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: newTransaction // the new data which we want to save
        })
    }

    function DeleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (

        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                AddTransaction,
                DeleteTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
} 