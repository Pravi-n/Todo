/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React,{  useState, useEffect } from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
//const Data = createContext();

const getModelStyle = ()=>{
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper:{
    position: `absolute`,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: `2px slide #000`,
    boxShadow: theme.shadows[5],
    padding:theme.spacing(2, 4, 3),
  },
}))

export function ListsWidget14({ className }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModelStyle);
    const [taskName, settaskName] = useState("");
    const [Description, setDescription] = useState("");
    const [ProjectName, setProjectName] = useState("");
    //const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        axios.get('localhost:3001/').then(response => {
    // do stuff
})
.catch(err => {
    // what now?
    console.log(err);
})
    },[])
    const AddTaskDetails = (e)=>{

        sdata.push({
          id: sdata.length +1,
          TaskName: taskName,
          Description: Description,
          ProjectName:ProjectName,
        })
        setOpen(false);
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
    <>
    <div className={`card card-custom ${className}`}>
    {/* begin::Header */}
                <div className="card-header border-0">
                  <h3 className="card-title font-weight-bolder text-dark">
                    Assigned Task
                  </h3>
                  <div className="card-toolbar">
                      <Button onClick={()=> setOpen(true)}><b> + </b></Button>
                      <Modal open = {open} onClose = {() => setOpen(false)} >
              
                          <div style={modalStyle} className={classes.paper}>
                            <Form>
                                <Form.Group controlId="formBasicTaskName">
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control onChange={(e)=> settaskName(e.target.value)} type="TaskName" placeholder="Task Name" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={(e)=> setDescription(e.target.value)} type="Description" placeholder="Description" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicProjectName">
                                    <Form.Label>ProjectName</Form.Label>
                                    <Form.Control onChange={(e)=> setProjectName(e.target.value)} type="PrpjectName" placeholder="ProjectName" /> 
                                </Form.Group>
                                
                                <Button onClick={AddTaskDetails} variant="primary" type="submit">
                                  Submit
                                </Button>
                            </Form>
                          </div>

                      </Modal>
                  </div>
                </div>
                {/* end::Header */}
        
        
    {sdata.map((val)=>{
              return(
              
              <div>
              
        
        
                {/* begin::Body */}
                <div className="card-body pt-2">
                  {/* begin::Item */}
                  <div className="d-flex flex-wrap align-items-center mb-1">
        
                    {/* begin::Title */}
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                      >


                       {val.TaskName}
                      

                      </a>
                      <span className="text-muted font-weight-bold font-size-sm my-1">


                       {val.Description}
                      

                      </span>
                    </div>
                    {/* end::Title */}
        
                    {/* begin::Info */}
                    <div className="d-flex align-items-center py-lg-0 py-2">
                      <div className="d-flex flex-column text-right">
                        <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                <input type="checkbox" value="1" />
                <span></span>
              </label>
                        <span className="text-muted font-size-sm font-weight-bolder">



                          Check it



                        </span>
                      </div>
                    </div>
                    {/* end::Info */}
                  </div>
                  {/* end::Item */}

          
        </div>
      </div>
      
                )
         })
      }
     
      </div>
      
      
    </>
  );
}

