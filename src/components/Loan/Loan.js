import React, {useState} from 'react';
import "./Loan.scss";
import { Slider, Typography, withStyles } from "@material-ui/core";
//import Slider from "@material-ui/core/Slider";
//import Typography from "@material-ui/core/Typography;"
import { Table, TableCell, TableRow }from "@material-ui/core"
import { Pie } from "react-chartjs-2";
import TableDetails from './TableDetails';
import SliderMarks from './SliderMarks';


const PrettoSlider = withStyles({
    root: {color: "#2c2c2d", height: 10},
    thumb: {height: 25, width: 25, backgroundColor: "white", border: "3px solid black", marginTop: -9, marginLeft: -9},
    track: {height: 10, borderRadius: 4},
    rail: {height: 10, borderRadius: 4},
})(Slider);

function Loan() {
    const[pAmount, setpAmount] = useState(275500);
    const[interest, setInterest ] = useState(7);
    const[duration, setDuration] = useState(147);
    const maxValue = 600000;
    const intMax= 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1- (Math.pow(1/(1+ intr), duration)))) : 0;
    const totalAmt = duration * emi;
    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

 
 

 return (<section className='Loan' id='Loan'>
<div className='CalApp'>
    <h2 className='CalHeading'><u>EMI Calculator</u> </h2>

<div>
<Typography gutterBottom><h3>Loan Amount</h3></Typography>
<PrettoSlider value={pAmount} marks={SliderMarks.marksAmt}  onChange={(event, vAmt) =>{setpAmount(vAmt)}} defaultValue={pAmount} max={maxValue}  />
</div>


<div>
<Typography gutterBottom><h3>Intrest Rate %</h3></Typography>
<PrettoSlider value={interest}  marks={SliderMarks.marksInt} onChange={(event, vInt) =>{setInterest(vInt);}} max={intMax} defaultValue={interest}  />
</div>


<div>
<Typography gutterBottom><h3>Tenure (Months)</h3></Typography>
<PrettoSlider value={duration}  marks={SliderMarks.marksTenure} onChange={(event, vDur) =>{setDuration(vDur);}} defaultValue={duration} max={maxDuration}  />
</div>
<div>
    <Table>
        <TableRow>
            <TableCell>
                <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}>

                </TableDetails>
            </TableCell>
            <TableCell>
            <Pie 
            data={{
                labels : ["Total Intrest", "Total Amount"],
                datasets : [{
                    data : [TotalAmountOfInterest, pAmount],
                    backgroundColor : ["red", "blue"]

                }]
            }}
            />
            </TableCell>
            
        </TableRow>
    </Table>
</div>
</div>

    </section>  );
}

export default Loan;
