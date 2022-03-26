import React from 'react';
//import Header from "../src/components/Header";

//import Thirdpage from './components/Thirdpage';
//import Firstpage from './components/Firstpage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import FormComponent from './components/Form/FormComponents';
//import Converter from './components/Converter/Converter';
import Navbar from './components/Navbar';
import Fullpage from './components/Fullpage';
import Login from './components/Login/Login';
import FormComponents from './components/Form/FormComponents';
import StepContext from './components/Form/StepContext';

//import AppReducer from './Converter/Context/AppReducer';


function App() {
    return (<div>
         <Router>
<Navbar />
<Routes>
                <Route path="/" element={<Fullpage />} />
                <Route path="/Login" element={ <Login />} />
                <Route path="/Register" element={
    <StepContext>
     <FormComponents />
    </StepContext>
  } />
               </Routes>
           
        </Router>       
    </div>  );
}

export default App;
