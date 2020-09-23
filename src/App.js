import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import {TransactionHistory} from './components/TransactionHistory'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'
 
function App() {
  return (
    <GlobalProvider >
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <AccountSummary></AccountSummary>
        <TransactionHistory></TransactionHistory>
        <AddTransaction></AddTransaction>
      </div>

    </GlobalProvider>
  );
}

export default App;
