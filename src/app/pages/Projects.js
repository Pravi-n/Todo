import React,{  useState , useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import {Button, Form} from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import { httpGet, httpPost } from "../httpService";
const instance = axios.create();

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

function createData(ProjectName, Description, StartDate, Status) {
  return { ProjectName, Description, StartDate, Status };
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
  let history = useHistory();
  const classes = useStyles();
    const [modalStyle] = useState(getModelStyle);
    const [projectName, setprojectName] = useState("");
    const [description, setDescription] = useState("");
    const [projectStatus, setStatus] = useState("");
    const [startDate, setDate] = useState("");
    const [id, setID] = useState("");
    const [editData, seteditData] = useState("");
    //const [posts, setPosts] = useState([]);
    const [openEdit,setEdit] = useState(false);
    const [openAdd, setOpen] = useState(false);
    const AddProject =async (e)=>{
      e.preventDefault();
      const dataToAdd={
        projectName : projectName,
        description : description,
        startDate : startDate,
        projectStatus : projectStatus,
        teamMembers : [1,2]
      }
      console.log("Inside Add");
      const data = await httpPost("https://quiet-dusk-10883.herokuapp.com/api/addProject",dataToAdd)
      console.log(data);
        setOpen(false);
        activateprojects();
        history.push("/projects");
    }

    const SubmitEditedProject =async (e) =>{
      e.preventDefault();
      console.log("inside sse",id);
      const dataToAdd={
        _id : id,
        projectName : projectName,
        description : description,
        projectStatus : projectStatus,
        teamMembers : [1,2]
      }
      console.log("Inside Edit");
      const data = await httpPost("https://quiet-dusk-10883.herokuapp.com/api/updateProject",dataToAdd)
      console.log(data);
        setEdit(false);
        activateprojects();
        history.push("/projects");
    }
  
  const [projects, setproject] = useState([]);

  useEffect(() => {
    activateprojects();
  }, []);

  const EditProject= async obj =>{
      setID(obj._id);
      console.log("Edit",obj);
      setEdit(true);
      seteditData(obj);
  }
  const activateprojects =async () => {
    console.log("Inside projects");
    const data = await httpGet("https://quiet-dusk-10883.herokuapp.com/api/getProjects");
    console.log('projects',data.data);
    setproject(data.data);

    // instance.get("http://localhost:3005/api/getProjects")
    //   .then(res=>{
    //     console.log('res ',res)
    //   }).catch(err=>{
    //     console.log('err',err);
    //   })
    //console.log(res.data);
    //setproject(res.data);
  };
  //console.log(projects);
  // const deleteproject= async id =>{
  //     await axios.delete(`http://localhost:3003/projects/${id}`);
  //     activateprojects();
  // }
  // console.log("projectsData",projects);
  // console.log("EditData",editData.projectName);
  //console.log("ID=".id);
  return (
      <div>
        <div>
                      <Modal open = {openAdd} onClose = {() => setOpen(false)} >
              
                          <div style={modalStyle} className={classes.paper}>
                              <h2 className='text-center'>Add Project</h2>
                            <Form className='mt-8'>
                                <Form.Group controlId="formBasicProjectName">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control onChange={(e)=> setprojectName(e.target.value)} type="TaskName" placeholder="Project Name" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={(e)=> setDescription(e.target.value)} as="textarea" rows="3" />
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Date of Creation</Form.Label>
                                    <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        type="date"
                                        className={classes.textField}
                                        onChange={(e)=> setDate(e.target.value)}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </form>
                                </Form.Group>

                                <Form.Group controlId="formNumberOfMembers">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control onChange={(e)=> setStatus(e.target.value)} type="PrpjectName" placeholder="Project Status" /> 
                                </Form.Group>

                                <Button onClick={AddProject} variant="primary" type="submit">
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
                                    <Form.Control onChange={(e)=> setprojectName(e.target.value)} type="TaskName" placeholder={editData.projectName}/>
                                </Form.Group>
                                  
                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={(e)=> setDescription(e.target.value)} as="textarea" rows="3" placeholder={editData.description} />
                                </Form.Group>

                                <Form.Group controlId="formNumberOfMembers">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control onChange={(e)=> setStatus(e.target.value)} type="PrpjectName" placeholder={editData.projectStatus}/>                               
                                     </Form.Group>

                                {/* <Form.Group controlId="formBasicDescription">
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
                                </Form.Group> */}

                                <Button onClick={SubmitEditedProject} variant="primary" type="submit">
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
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Start Date</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map(row => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.projectName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.startDate}</StyledTableCell>
              <StyledTableCell align="center">{row.projectStatus}</StyledTableCell>
              <StyledTableCell align="center">
              <Link className='btn btn-outline-primary mr-4' onClick={()=> EditProject(row)} >Edit</Link>                      
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