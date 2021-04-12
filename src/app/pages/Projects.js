import React,{  useState } from "react";
import {Link} from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import {Button, Form} from "react-bootstrap";
import TextField from '@material-ui/core/TextField';

const getModelStyle = ()=>{
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize:14,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(ProjectName, MemebersCount, DOC, PrndingTasks, CompletedTasks, status) {
  return { ProjectName, MemebersCount, DOC, PrndingTasks, CompletedTasks, status };
}

const rows = [{
            id:1,
            ProjectName: "ABC",
            MembersCount:5,
            DOC:4,
            PendingTasks:3,
            CompletedTasks:4,
            status:false
          },{
            id:2,
            ProjectName: "PQR",
            MembersCount:6,
            DOC:2,
            PendingTasks:3,
            CompletedTasks:4,
            status:false
          },{
            id:3,
            ProjectName: "XYZ",
            MembersCount:7,
            DOC:1,
            PendingTasks:3,
            CompletedTasks:4,
            status:false
          }]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  paper:{
    position: `absolute`,
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: `2px slide #000`,
    borderRadius:'10px',
    boxShadow: theme.shadows[5],
    padding:theme.spacing(2, 4, 3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },    
  btnStyle:{
    color:'#ffffff',
    display:'block',
    margin:'auto',
    backgroundColor:'#ffffff',
    marginBottom:'0px'
  },
  headerTitle:{

  }
}));

export default function CustomizedTables() {
  const classes = useStyles();
    const [modalStyle] = useState(getModelStyle);
    const [taskName, settaskName] = useState("");
    const [Description, setDescription] = useState("");
    const [ProjectName, setProjectName] = useState("");
    //const [posts, setPosts] = useState([]);
    const [openEdit,setEdit] = useState(false);
    const [openAdd, setOpen] = useState(false);
    const AddProjectDetails = (e)=>{
        sdata.push({
          id: sdata.length +1,
          TaskName: taskName,
          Description: Description,
          ProjectName:ProjectName,
        })
        setOpen(false);
    }

    const EditProjectDeatils = (e)=>{
        setEdit(false);
    }
  const app = [{
    id:1,
    TaskName: "Daliy standUp meeting",
    Description:"this meeting is for Tejas and team",
    ProjectName:"Yina",
  },{
    id:2,
    TaskName: "UserProfile Complete",
    Description:"user Data and there information need ",
    ProjectName:"Mina",
  },{
    id:3,
    TaskName: "Amezon Prime",
    Description:"we need more amezon prime membership",
    ProjectName:"Dika",
  }]
  const [sdata, setsdata] = useState(app);
  return (
      <div>
        <div>
                      <Modal open = {openAdd} onClose = {() => setOpen(false)} >
              
                          <div style={modalStyle} className={classes.paper}>
                              <h2 className='text-center'>Add Project</h2>
                            <Form className='mt-8'>
                                <Form.Group controlId="formBasicProjectName">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control onChange={(e)=> settaskName(e.target.value)} type="TaskName" placeholder="Task Name" /> 
                                </Form.Group>

                                <Form.Group controlId="formNumberOfMembers">
                                    <Form.Label>Number of Members</Form.Label>
                                    <Form.Control onChange={(e)=> setProjectName(e.target.value)} type="PrpjectName" placeholder="ProjectName" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Date of Creation</Form.Label>
                                    <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        type="date"
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </form>
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>

                                <Button onClick={AddProjectDetails} variant="primary" type="submit">
                                  Submit
                                </Button>
                            </Form>
                            </div>
                            </Modal>

        </div>
        <div>
                      <Modal open = {openEdit} onClose = {() => setEdit(false)} >
              
                          <div style={modalStyle} className={classes.paper}>
                              <h2 className='text-center'>Edit Project</h2>
                            <Form className='mt-8'>
                                <Form.Group controlId="formBasicProjectName">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control onChange={(e)=> settaskName(e.target.value)} type="TaskName" placeholder="Task Name" /> 
                                </Form.Group>

                                <Form.Group controlId="formNumberOfMembers">
                                    <Form.Label>Number of Members</Form.Label>
                                    <Form.Control onChange={(e)=> setProjectName(e.target.value)} type="PrpjectName" placeholder="ProjectName" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Date of Creation</Form.Label>
                                    <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        type="date"
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </form>
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>

                                <Button onClick={EditProjectDeatils} variant="primary" type="submit">
                                  Edit
                                </Button>
                            </Form>
                            </div>
                            </Modal>

        </div>
        <Button className='btn btn-dark float-right mb-3' onClick={()=> setOpen(true)}><b> Add Project </b></Button>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell align="center">Members Count</StyledTableCell>
            <StyledTableCell align="center">Date of Creation</StyledTableCell>
            <StyledTableCell align="center">Pending Tasks</StyledTableCell>
            <StyledTableCell align="center">Completed Tasks</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.ProjectName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.MembersCount}</StyledTableCell>
              <StyledTableCell align="center">{row.DOC}</StyledTableCell>
              <StyledTableCell align="center">{row.PendingTasks}</StyledTableCell>
              <StyledTableCell align="center">{row.CompletedTasks}</StyledTableCell>
              <StyledTableCell align="center">
              <Link className='btn btn-outline-primary mr-4' onClick={()=> setEdit(true)} >Edit</Link>                      
                        <button className='btn btn-danger'  >Delete</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

{/* // import React from 'react';
// import {Table} from "react-bootstrap";
// import Checkbox from '@material-ui/core/Checkbox';
// const MyLog = () => { */}
    
//     const app = [{
//         id:1,
//         ProjectName: "ABC",
//         MembersCount:5,
//         DateOfCreation:4,
//         PendingTasks:3,
//         CompletedTasks:4,
//         checked:false
//       },{
//         id:2,
//         ProjectName: "PQR",
//         MembersCount:6,
//         DateOfCreation:2,
//         PendingTasks:3,
//         CompletedTasks:4,
//         checked:false
//       },{
//         id:3,
//         ProjectName: "XYZ",
//         MembersCount:7,
//         DateOfCreation:1,
//         PendingTasks:3,
//         CompletedTasks:4,
//         checked:false
//       }]
//       const handleChange = name => event => {
//         //setState({ ...state, [name]: event.target.checked });
//       };

//     return (    
// <Table striped bordered hover>
//   <thead className='thead-dark'>
//     <tr>
//       <th>Project name</th>
//       <th>Members</th>
//       <th>Date of Creation</th>
//       <th>Pending Taks</th>
//       <th>Completed Taks</th>
//       <th>Completed</th>
//     </tr>
//   </thead>
//   <tbody>
//       {app.map((val)=>(
//             <tr>
//             <td>{val.ProjectName}</td>
//             <td>{val.MembersCount}</td>
//             <td>{val.DateOfCreation}</td>
//             <td>{val.PendingTasks}</td>
//             <td>{val.CompletedTasks}</td>
//             <td>
//                 <Checkbox
//         checked={val.checked}
//         onChange={handleChange(val.id)}
//         value="checkedA"
//         inputProps={{
//           'aria-label': 'primary checkbox',
//         }}
//       />
//       </td>
//           </tr>
//       ))}
    
//     {/* <tr>
//       <td>2</td>
//       <td>5</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td> 5</td>
//       <td>@twitter</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr> */}
//   </tbody>
// </Table>

//      );
// }
 
// export default MyLog;