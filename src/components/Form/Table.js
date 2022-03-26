import React, { useContext } from 'react';
import { multiStepContext } from './StepContext';
import "./Form.scss";

export default function Table() {
  const { finalData } = useContext(multiStepContext);


    return (
    
                  <div>
                <table>
                    <thead>
                        <tr>
                        <th>FirstName</th>    
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Country</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>                   
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jenny</td>
                            <td>Olabisi</td>
                            <td>Female</td>
                            <td>3 dixon road</td>
                            <td>Wakanda</td>
                            <td>080419007</td>
                            <td>Jennychan@gmail.com</td>
                            
                        </tr>
                    </tbody>

                    <tbody>
                        {finalData.map((data) => (
                        <tr key={data}>
                            <td>{data.FirstName}</td>
                            <td>{data.LastName}</td>
                            <td>{data.Gender}</td>
                            <td>{data.Address} </td>
                            <td>{data.Country}</td>
                            <td>{data.PhoneNumber}</td>
                            <td>{data.Email}</td>

                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

    
  )
}
