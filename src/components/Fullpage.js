import React from 'react';
import './Navbar.scss';
import Firstpage from './Firstpage';

//import Create from './CreateAccountTable/Create';
import Converter from './Converter/Converter';
//import FormComponents from './Form/FormComponents';
import Currency from './Currency/Currency';
import Loan from './Loan/Loan';
//import AppReducer from './Converter/Context/AppReducer';

//import StepContext from "./Form/StepContext";

const Fullpage = () => {
  return <div>
    <div><Firstpage /></div>
    <Currency />
    <Converter />

    <Loan />

  </div>;
};

export default Fullpage;
