import React, { useContext } from 'react';

import { multiStepContext } from './StepContext';
import { Button, TextField } from '@material-ui/core';




function SecondStep() {


    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext); 


    return (<div>
  <div>
        <TextField label="PhoneNumber" margin='normal' variant='outlined' color='secondary'
        fullWidth={true}
        value={userData["PhoneNumber"]} onChange={(e)=>setUserData({...userData, "PhoneNumber" : e.target.value})}
        required="required" />
        </div>
        
        <div>
        <TextField label="Email" margin='normal' variant='outlined' color='secondary'
        value={userData["Email"]} onChange={(e)=>setUserData({...userData, "Email" : e.target.value})}
        fullWidth={true}  />
        </div>
        
        <div>
        
      
        </div>
        <div id="buttonSpace">
         <Button variant="contained"  color="secondary" onClick={()=>setStep(2)} > Previous</Button><span> </span>
        <Button id="Next" variant="contained" color="primary" onClick={submitData}> Submit</Button>
        </div>


    </div>  );
}

export default SecondStep;

