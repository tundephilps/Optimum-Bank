import React, { useContext } from 'react'
//import { CgTrash } from 'react-icons/cg'
import { GlobalContext } from "./Context/GlobalState";
import ExpenseTransaction from './ExpenseTransaction';


const ExpenseList = () => {

  const { expenseTransactions } = useContext(GlobalContext);


  return (
    <div className="ade">
    <h2>Transaction History</h2>
    <ul className='ada'>
      
  {expenseTransactions.map(expenseTransaction => (
   <ExpenseTransaction
   key={expenseTransaction.id}
   expenseTransaction={expenseTransaction} />
    

  ))}
    </ul>
    
    
        </div>
  )
}

export default ExpenseList;