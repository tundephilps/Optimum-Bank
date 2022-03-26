import React, { useContext } from 'react';
import "./Form.scss";
import { Button, Grid, TextField } from '@material-ui/core';
import { multiStepContext } from './StepContext';



function SecondStep() {

    const { setStep, userData, setUserData } = useContext(multiStepContext); 
  

    return (<div>
  <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>  

  <div>

        <TextField label="Address" value={userData["Address"]} onChange={(e)=>setUserData({...userData, "Address" : e.target.value})} 
        fullWidth={true} margin='normal' variant='outlined' color='secondary' required="required" />
        </div>
</Grid>        
<Grid item xs={12} sm={6} >  

        <div>
        <TextField label="Country" margin='normal' variant='outlined' color='secondary' required="required" 
 fullWidth={true} value={userData["Country"]} onChange={(e)=>setUserData({...userData, "Country" : e.target.value})}
        />
        </div>
</Grid>        
        <div>
        
             </div>
             <div id="buttonSpace">
             <Button  variant="contained" color="secondary" onClick={()=>setStep(1)} > Previous</Button>
        <Button  id="Next" variant="contained" color="primary" onClick={()=>setStep(3)} > Next</Button>
        </div>

    </Grid> 
    </div>
     );
}

export default SecondStep;






































/*
export default function Step2({state, handleOnChange, handleNext})

{
return(
<Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>  
                          
                 <TextField
                 label='FullName'
                 variant='outlined'
                 placeholder="Enter a name"
                 name="fullName"
                 fullWidth={true}
                 size='small'
                 required="required"
                 value={this.state.data.fullName}
                // error
                 //={errors.fullName ? true :false}
                // helperText="write your name ode"
                 onChange={handleOnChange}
                 />
                </Grid>
                <Grid item xs={12} sm={6} >  
                          
                 <TextField 
                 label='Address'
                 variant='outlined'
                 placeholder="Enter address"
                 name="Address"
                 fullWidth={true}
                 size='small'
                 required="required"
                 value={this.state.data.Address}
                // error
                 //={errors.fullName ? true :false}
                // helperText="write your name ode"
                 onChange={handleOnChange}
                 />
                </Grid>


                <Grid item xs={12} spacing={2} mt={9}>  
                          
                          <TextField
                          id="outlined-select-options"
                          select
                          label='Gender'
                          variant='outlined'
                          name="gender"
                          fullWidth={true}
                          size='small'
                          required="required"
                          value={this.state.data.Gender}
                         // error
                          //={errors.fullName ? true :false}
                         // helperText="write your name ode"
                          onChange={handleOnChange}
                          >
                                {options.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                    </MenuItem>
                                ))

                                }

                             </TextField> 
                         </Grid>
                         
                </Grid>
                


)


}*/