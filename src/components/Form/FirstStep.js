import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from './StepContext';


export const FirstStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext); 
  return (
    
    <div>
        <div>
    <form>
        <TextField
         label="FirstName" margin='normal' variant='outlined' color='primary' required="required"
        fullWidth={true} 
        value={userData["FirstName"]} onChange={(e)=>setUserData({...userData, "FirstName" : e.target.value})}
        size='medium' />
        </form>
        </div>
        
        <div>
          <form>
        <TextField
         label="LastName" margin='normal' variant='outlined' color='primary' required="required" 
        value={userData["LastName"]} onChange={(e)=>setUserData({...userData, "LastName" : e.target.value})}
        fullWidth={true}
       />
        </form>
        </div>
        
        <div>
      
        <TextField label="Gender" margin='normal' variant='outlined' color='secondary'
        value={userData["Gender"]} onChange={(e)=>setUserData({...userData, "Gender" : e.target.value})}
        />
        
        </div>
        <div id="buttonSpace">
        <Button  id="Next" variant="contained" color="primary" onClick={()=>setStep(2)}> Next</Button>
        </div>
    </div>
  
  )
}
































































/*import React from 'react';

import { Button, Grid, MenuItem, TextField } from "@material-ui/core";




export default function Step1({ handleOnChange, handleNext, options })

{
return(
    <div>
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
                // value={this.state.data.fullName}
               //  state={this.state}
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
//value={this.state.data.Address}
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
                         // value={this.state.data.Gender}
                         // error
                          //={errors.fullName ? true :false}
                         // helperText="write your name ode"
                          onChange={handleOnChange}>
                             


                             </TextField> 



                             
                             <Grid container  justify="flex-end" styles={{display: "flex", paddingTop: "7px", paddingLeft: "10px"  }}>
                                
                                <Button variant="outlined" color="primary" onClick={handleNext}
                                
                                >Next</Button>

                            
                     </Grid>

                         </Grid>
                         
                </Grid>


                                          

    </div>
)}

*/