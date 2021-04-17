import React,{  useState , useEffect} from "react";
//import { DataGrid } from '@material-ui/data-grid';
import {Table} from "react-bootstrap";
import Accordian from '../components/accordian';
import { httpGet, httpPost } from "../httpService";
import {
  Button,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
const LogReport = () => {

  const columns = [
    { field: 'id', headerName: 'Date', width: 70 },
    { field: 'Tejas', headerName: 'Tejas', width: 130 },
    { field: 'Pravin', headerName: 'Pravin', width: 130 },
    { field: 'XYZ', headerName: 'PQR', width: 130 },
  ];
  
  const [AllLogs, setAllLogs] = useState([]);
  
  useEffect(() => {
    console.log("Inside ...")
    activateLogs();
  }, []);

  const activateLogs = async () => {
    console.log("Inside log report")
    var logs = [];
    var startDate = new Date("2021-04-16");
    var endDate = new Date("2021-04-18");
    var date = new Date(startDate);
    //console.log(startDate);
    //console.log(endDate);
    while(date <= endDate)
    {
      //console.log(date);
      const data = await httpPost("https://quiet-dusk-10883.herokuapp.com/log/getLogsByDate",{date});
      //console.log("log data",data);
      if(data.data.length > 0)
      {
        logs.push(data);
      }
      date.setDate(date.getDate()+1);
    }
   //console.log(logs[0].data[0].Log_Date);
   
   setAllLogs(logs);
  }

    return ( 

    //   <div style={{ height: 400, width: '100%' }}>
    //   <DataGrid rows={AllLogs} columns={columns} pageSize={5} checkboxSelection />
    // </div>
       <div >
         
{/* <Navbar bg="light" expand="lg">
<Navbar bg="light">
    <Navbar.Brand>Filter By</Navbar.Brand>
  </Navbar>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
</Navbar> */}

<Table responsive>
  <thead className='thead-dark'>
    <tr>
       <th style={{minWidth:'15rem'}}>Date/Names</th>
       <th style={{minWidth:'15rem'}}>Pravin</th>
       <th style={{minWidth:'15rem'}}>Tejas</th>
       <th style={{minWidth:'15rem'}}>Xyz</th>
    </tr>
  </thead>
  <tbody>
    {AllLogs.map(Log => (
      <tr>
         <td >{`${new Date(Log.data[0].Log_Date).getDate()}-${new Date(Log.data[0].Log_Date).getMonth()}-${new Date(Log.data[0].Log_Date).getFullYear()}`}</td>   
        {
            Log.data.map(data => (
              <td ><Accordian msg={{data}}/></td>
            ))
        }
         </tr>
    ))}
  </tbody>
</Table>
       </div>

     );
}
 
export default LogReport;

// <div >
// <Table responsive>
//   <thead className='thead-dark'>
//     <tr>
//        <th style={{minWidth:'15rem'}}>Date/Names</th>
//        <th style={{minWidth:'15rem'}}>Pravin</th>
//        <th style={{minWidth:'15rem'}}>Tejas</th>
//        <th style={{minWidth:'15rem'}}>Xyz</th>
//        <th style={{minWidth:'15rem'}}>PQR</th>
//        <th style={{minWidth:'15rem'}}>LMN</th>
//        <th style={{minWidth:'15rem'}}>PQR</th>
//        <th style={{minWidth:'15rem'}}>LMN</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td >1/11/2020</td>
//       <td ><Accordian/>
//      </td>
//       <td > <Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//     </tr>
//     <tr>
//     <td >2/11/2020</td>
//       <td >
//         <Accordian/>
//       </td>
//       <td > 
//         <Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//     </tr>
//     <tr>
//     <td >3/11/2020</td>
//       <td >
//         <Accordian/>
//       </td>
//       <td > 
//         <Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>   
//       <td ><Accordian/>
//       </td>
//       <td ><Accordian/>
//       </td>
//     </tr>
//   </tbody>
// </Table>
//        </div>

