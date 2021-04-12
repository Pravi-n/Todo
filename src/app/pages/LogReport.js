import React from 'react';
import {Table} from "react-bootstrap";
import Accordian from '../components/accordian';
const LogReport = () => {
    return ( 
       <div style={{overflowX:'auto'}}>
<Table striped bordered style={{width:'100%',overflowX:'auto'}}>
  <thead className='thead-dark'>
    <tr>
      <th>Date/Names</th>
      <th>Pravin</th>
      <th>Tejas</th>
      <th>Xyz</th>
      <th>PQR</th>
      <th>LMN</th>
      <th>PQR</th>
      <th>LMN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width:'800px'}}>1/11/2020</td>
      <td style={{width:'800px'}}>
        <Accordian/>
      </td>
      <td style={{width:'800px'}}> 
        <Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
    </tr>
    <tr>
    <td style={{width:'800px'}}>2/11/2020</td>
      <td style={{width:'800px'}}>
        <Accordian/>
      </td>
      <td style={{width:'800px'}}> 
        <Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
    </tr>
    <tr>
    <td style={{width:'800px'}}>3/11/2020</td>
      <td style={{width:'800px'}}>
        <Accordian/>
      </td>
      <td style={{width:'800px'}}> 
        <Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>   
      <td style={{width:'800px'}}><Accordian/>
      </td>
      <td style={{width:'800px'}}><Accordian/>
      </td>
    </tr>
  </tbody>
</Table>
       </div>

     );
}
 
export default LogReport;