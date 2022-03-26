import React from 'react';
import { Table, TableCell, TableRow, TableHead }from "@material-ui/core"


const TableDetails = (props) => {
  return (
  <Table>
      <TableHead>
          <TableRow>
          <TableCell className="ETableCellText"><h2>Loan Amount</h2></TableCell>
          <TableCell className='ETableCellVal'><h2>${props.pAmount}</h2> </TableCell>  
          
          </TableRow>
          <TableRow>
          <TableCell className="ETableCellText"><h2>Interest %</h2></TableCell>
          <TableCell className='ETableCellVal'><h2>{props.interest}</h2> </TableCell>  
          
          </TableRow>
          <TableRow>
          <TableCell className="ETableCellText"><h2>Tenure (Months)</h2></TableCell>
          <TableCell className='ETableCellVal'><h2>{props.duration}</h2> </TableCell>  
          
          </TableRow>
          <TableRow>
          <TableCell className="ETableCellText"><h2>EMI (Monthly)</h2></TableCell>
          <TableCell className='ETableCellVal'><h2>${props.emi}</h2> </TableCell>  
          
          </TableRow>
          <TableRow>
          <TableCell className="ETableCellText"><h2>Total Interest</h2></TableCell>
          <TableCell className='ETableCellVal'><h2>${props.TotalAmountOfInterest} </h2></TableCell>  
          
          </TableRow>
          <TableRow>
          <TableCell className="ETableCellText"><h2>Total Payment</h2><h3>(loan Amount + Interest)</h3></TableCell>
          <TableCell className='ETableCellVal'><h2>${props.totalAmt ? props.totalAmt : 0} </h2></TableCell>  
          
          </TableRow>
     
      </TableHead>
  </Table>
  
    )
}

export default TableDetails