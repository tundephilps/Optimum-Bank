
import { CgTrash } from 'react-icons/cg'
import React, {useContext} from 'react'

import { GlobalContext } from './Context/GlobalState'

const ExpenseTransactions = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
     <li className="ope">
  <span className="transaction-text">
    {expenseTransaction.expenseText}
    </span>
  <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
 <button  className='delete-btn'
  onClick={() => deleteTransaction(expenseTransaction.id)} 
 >
  <CgTrash />
  </button>
</li>
  )
}

export default ExpenseTransactions;