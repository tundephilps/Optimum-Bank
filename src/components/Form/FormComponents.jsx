import React, { useContext } from 'react'
import { FirstStep } from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from "./ThirdStep";
import "./Form.scss"
import { StepLabel, Stepper, Step, Grid, Box, Paper } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import Table from './Table';
import { renderText } from './displayComp';


function FormComponents() {
    
const { currentStep } = useContext(multiStepContext);

function showStep(step) {
    switch(step){
        case 1:
        return <FirstStep />
        case 2:
            return <SecondStep />
            case 3:
                return <ThirdStep />
                default:
    }
    }
    

    
    return (<>
    <Grid container id='Form-container'>
        <Grid item xs={12} sm={7}  id="Grid">
          
                <Box p={2} mb={2} component={Paper}>
                {renderText({label:"Create An Account"})}
                <Stepper style={{width: "100%"}} orientation="horizontal" activeStep={currentStep - 1} >
<Step>
<StepLabel></StepLabel>
</Step>
<Step>
<StepLabel></StepLabel>
</Step>
<Step>
<StepLabel></StepLabel>
</Step>

</Stepper>
                </Box>
                <Box p={2} mb={2} component={Paper}>
                <form id="Form">
              
                {renderText({label:"Fill All Details"})}
                <Box>
        
{showStep(currentStep)}

              </Box>
           </form>
           </Box>
        </Grid>
    
<Table />
    </Grid>
    

      
    
    </>);
}

export default FormComponents;