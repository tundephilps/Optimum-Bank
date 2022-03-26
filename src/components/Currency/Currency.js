import axios from 'axios';
import React from 'react'
import {useState, useEffect} from "react";
import { Card, Form, FormSelect } from 'react-bootstrap';
import "./Currency.scss";


const Currency = () => {

const [initialState, setState] = useState({
  currencies: ["USD", "NGN", "CAD", "GBP", "EUR"],
  base: "EUR",
  amount: "",
  convertTo: "NGN",
  result: "",
  date: "",

});

const { currencies, base, amount, convertTo, result, date} = initialState

useEffect(() => {
  if(amount === isNaN)  {

  return;
 } else {
    const getCurrencyConvertor = async () => {
    const response = await axios.get("http://api.exchangeratesapi.io/latest?access_key=87c7965c41acd8eab0f0b8a0d22c22fb&format=1&base=EUR");
      
    console.log("response==>", response);
  //const date = response.data.date;
      const result = (response.data.rates[convertTo] * amount).toFixed(3);
      setState({
        ...initialState,
        result,
        date,
      });
    
  };
  getCurrencyConvertor();
}
}, [amount, base, convertTo, date, initialState]);


/*
    const getCurrencyConvertor = () => {
  Axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=87c7965c41acd8eab0f0b8a0d22c22fb&format=1").then(
    (response) => {
      console.log(response);
      }  );
};

getCurrencyConvertor();

*/


const onChangeInput = (e) => {
setState({
  ...initialState,
  amount: e.target.value,
  result: null,
  date: null,
});

};
const handleSelect = (e) => {
  setState({
    ...initialState,
    [e.target.name]: e.target.value,
    result: null,
  });
};

const handleSwap = (e) => {
  e.preventDefault();
  setState({
    ...initialState,
    convertTo: base,
    base: convertTo,
    result: null,

  })
};


  return (
    <section id='currency'>
        <div id="currencybox">
          <div id="innerbox">
            <Card
            title="CURRENCY CONVERTER"
            style={{width: "100%", height: "20%", backgroundColor: "#2c2c3d", alignItems: "center", justifyContent: "center"}}
            ><h1>CURRENCY CONVERTER</h1></Card>
        <h3 id='h3'>{amount} {base} is equivalent to</h3>
        <h1 id="h1">{amount === "" ? "0" : result === null ? "Calculating ...": result}
        {convertTo}
        </h1>
        <p id="p">As of {amount === "" ? "": date === null ? "" : date}</p>
        <div className='row'> 
          <div className='col-lg-10'>
          <form className='form-inline mb-4'>
            <input 
            type="number"
            value={amount}
            onChange={onChangeInput}
            className="form-control form-control-lg mx-5"
            
            />
            <FormSelect
            name='base'
            value={base}
            onChange={handleSelect}
            className="form-control-sm"
            
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}

            </FormSelect>
          </form>
          <Form className="form-inline mb-4" >
                <input
                disabled={true}
                value={
                  amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result
                }
                className="form-control form-control-lg mx-5"
                />
                   <FormSelect
            name='convertTo'
            value={convertTo}
            onChange={handleSelect}
            className="form-control form-control-lg"
            
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}

            </FormSelect>
         
          </Form>
          </div>
<div className='col-lg-2 align-self-center'>
  <h1 onClick={handleSwap} style={{cursor:"pointer", fontSize: "6rem"}}>
    &#8595;&#8593;
  </h1>
</div>
        </div>

        


          </div>
        </div>
        </section>
  )
}

export default Currency




//http://api.exchangeratesapi.io/v1/latest?access_key=87c7965c41acd8eab0f0b8a0d22c22fb&format=1








