import React, {useContext} from 'react'
import { CgTrash } from 'react-icons/cg'
import { GlobalContext } from './Context/GlobalState'


const IncomeTransactions = ({ incomeTransaction }) => {
const { deleteTransaction } = useContext(GlobalContext);

  return (
     <li className="ope">
  <span className="transaction-text">
    {incomeTransaction.incomeText}
    </span>
  <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
 <button 
 className='delete-btn'
  onClick={() => deleteTransaction(incomeTransaction.id)} >
  <CgTrash />
  </button>
</li>
  )
}

export default IncomeTransactions