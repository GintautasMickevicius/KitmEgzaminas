import React,{ useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';

const TransactionList = ( ) => {

    const { transactions, getTransactions } = useContext(GlobalContext);
    
    useEffect(() => {
      getTransactions();
    }, []);
  return (
      <div className='history'>
    <h3>Istorija</h3> 
    <ul className="list">
    {transactions.map(transaction =>(<Transaction key={transaction._id} transaction={transaction} />))}  {/* Mapinam transakcijas ir perduodam transaction per propsus */}
    </ul>
    </div>
  )
};

export default TransactionList;
