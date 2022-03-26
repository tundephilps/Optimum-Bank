
import "./Converter.scss";

import React from 'react'
import Header from "./Header";
import Balance from "./Balance";
import AddTransactions from "./AddTransactions";
//import IncomeList from "./IncomeList";
import { GlobalContextProvider } from "./Context/GlobalState";

const Converter = () => {
  return (
    <GlobalContextProvider>
    <div className="conbody" id="Budget">
      <div className="app-wrapper">
<Header />
<Balance />
<AddTransactions />

      </div>
      
      </div>
      </GlobalContextProvider>
  )
}

export default Converter