import React, {useContext} from 'react'
//import { CgTrash } from "react-icons/cg";
import { GlobalContext } from './Context/GlobalState';
//import IncomeTransactions from './incomeTransactions';


const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);



  return (
    <div className="ade">
<h2>Transaction History</h2>
<ul className='ada'>
  {incomeTransactions.map(incomeTransaction => (
   <incomeTransaction
   key={incomeTransaction.id}
   incomeTransaction={incomeTransaction} />


  ))}
    
</ul>


    </div>
  )
}

export default IncomeList