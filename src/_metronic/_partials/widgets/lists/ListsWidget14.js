/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React,{  useState, useEffect } from "react";

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
    const [state, setstate] = useState([]);
    const [modalStyle] = useState(getModelStyle);
    const [taskName, settaskName] = useState("");
    const [Description, setDescription] = useState("");
    const [ProjectId, setProjectId] = useState(0);
    //const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);
    
    useEffect(()=>{
        async function getData(){
        const data = {
          User_ID:121213
        }
        const notChecked = {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        }
        const res = await fetch('https://quiet-dusk-10883.herokuapp.com/taskTodo/readNotCheck', notChecked);
        const json = await res.json();
        console.log(json);
        setstate(json);
      }
      getData();
    },[])

    const taskCompleted = async (e)=>{
        const data = {
          _id:e
        }
      const TaskChecked = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      const res = await fetch('https://quiet-dusk-10883.herokuapp.com/taskTodo/CheckIn', TaskChecked);
      const json = await res.json();
      console.log(json);
    }
    const AddTaskDetails = async (e)=>{
      const data = {
        Name: taskName,
        Description: Description,
        ProjectId: 4,
        Assigner_ID:123124,
        User_ID:121213
      }
      console.log(data);
      const TaskCreate = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      const res = await fetch('https://quiet-dusk-10883.herokuapp.com/taskTodo/CreateTask', TaskCreate);
      const json = await res.json();
      console.log(json);
      setOpen(false);
      window.location.reload();
    }
  
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
                            <Form onSubmit={(e)=>e.preventDefault()}>
                                <Form.Group controlId="formBasicTaskName">
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control onChange={(e)=> settaskName(e.target.value)} type="TaskName" placeholder="Task Name" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={(e)=> setDescription(e.target.value)} type="Description" placeholder="Description" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicProjectId">
                                    <Form.Label>ProjectId</Form.Label>
                                    <Form.Control onChange={(e)=> setProjectId(e.target.value)} type="PrpjectId" placeholder="ProjectId" /> 
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
        
       
    {state.map((val)=>{
              
              return(
              
              <div key={val._id}>
              
        
        
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
                          <input onClick={()=>{taskCompleted(val._id)}} type="checkbox" value="1" />
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

