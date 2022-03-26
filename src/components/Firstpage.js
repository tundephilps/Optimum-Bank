import { Typography } from '@material-ui/core';
import React from 'react';
import "./Navbar.scss";
import { useNavigate } from 'react-router-dom';





const Firstpage = () => {


    
        let navigate = useNavigate();


  return(<section className='sectionimage'> 
  <div id='main' className='firstsection'>
      <h1>Optimum Bank</h1>
      <Typography variant="h3" className="typo">Your tested and trusted wealth Manager</Typography>
    <div className="btns">
    <a onClick={() => {navigate("/Login");}} href className="botton">Login</a>
    <a onClick={() => {navigate("/Register");}} href className="botton">Register</a>
    
    </div>
  </div>
  
  </section>
  
  );
};





export default Firstpage;