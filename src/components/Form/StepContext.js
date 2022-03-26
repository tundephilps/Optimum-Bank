import React, { useState } from 'react';
import FormComponents from './FormComponents';


export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    

    function submitData() {
        setFinalData(finalData=>[...finalData, userData]);
        setUserData('');
        setStep(1);
    }
    

    
    return (<div>

<multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}} >
<FormComponents />

</multiStepContext.Provider>



    </div>  );
}

export default StepContext;