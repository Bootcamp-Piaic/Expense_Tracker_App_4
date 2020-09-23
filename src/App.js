import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import {TransactionHistory} from './components/TransactionHistory'
import {AddTransaction} from './components/AddTransaction'
 
function App() {
  return (
    <div >
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <AccountSummary></AccountSummary>
        <TransactionHistory></TransactionHistory>
        <AddTransaction></AddTransaction>
      </div>

    </div>
  );
}

export default App;
