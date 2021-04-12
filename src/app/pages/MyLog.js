import {Table} from "react-bootstrap";
import React,{  useState, useEffect, lazy } from "react";
import {Button, Form} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PencilEdit from '@material-ui/icons/BorderColor';
//import firebase from "../firebase";
// const CalTable = lazy(()=>
// 	import("./TeamLog")
// )
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



const MyLog=()=>{
	const padding={
		height:"30px",
		padding:"30px 0"
	}
	const AddTaskDetails=()=>{
		setData((preDta)=>{
			const info = {Morning:`${MorUpdate}`, id:`${specData}`, afterNon:`${AftUpdate}`, Achived:`${Acivment}`, userName:`${preDta[specData].userName}`, Date:`${preDta[specData].Date}`};
		    preDta.splice(specData, 1, info);
			const UpdatedPreData = preDta;
			return [...UpdatedPreData];
		})
        setOpen(false);
	}
	let  tests = [
		{Morning:'1. Lets do it'
		, id:'1'
		, afterNon:"do with ui"
		, Achived:"updated list"
		, userName:"kelvin"
		, Date:"1/12/2020"},
	    {Morning:'go for it', id:'2', afterNon:"report to umang sir", Achived:"updated list", userName:"kelvin", Date:"2/12/2020"},
	    {Morning:'djvhfbv', id:'3', afterNon:"meeting with hemanshu sir", Achived:"updated list", userName:"kelvin", Date:"3/12/2020"},
	]
	const [data, setData] = useState(tests);
	const [specData, setSpecData] = useState(null);
	const classes = useStyles();
    const [modalStyle] = useState(getModelStyle);
    const [MorUpdate, setMorUpdate] = useState("");
    const [OpenAadd, setsetOpenAadd] = useState(false);
    const [AftUpdate, setAftUpdate] = useState("");
    const [Acivment, setAchivment] = useState("");
    //const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);
	const EditAction =(vals, index)=>{
		setSpecData(index);
		setOpen(true);

	}
	// const AddFirstChange = ()=>{
	// 	setsetOpenAadd(false);
	// }

	
		return(<>
					
					  {/* <Modal open = {open} onClose = {() => setsetOpenAadd(false)} >
              
                          <div style={modalStyle} className={classes.paper}>
                            <Form>
                                <Form.Group controlId="formBasicTaskName">
                                    <Form.Label>Write Morning Log</Form.Label>
                                  
                                    <Form.Control as="textarea" onChange={(e)=> setMorUpdate(e.target.value)} type="MorningUpdate" placeholder="MorningUpdate" /> 
                               
                                </Form.Group>     
                                <Button onClick={AddFirstChange} variant="primary" type="submit">
                                  Submit
                                </Button>
                            </Form>
                          </div>

                      </Modal> */}

                      <Modal open = {open} onClose = {() => setOpen(false)} >
              
                          <div style={modalStyle} className={classes.paper}>
                            <Form>
                                <Form.Group controlId="formBasicTaskName">
                                    <Form.Label>Morning Log</Form.Label>
                                  
                                    <Form.Control as="textarea" onChange={(e)=> setMorUpdate(e.target.value)} type="MorningUpdate" placeholder="MorningUpdate" /> 
                               
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>AfterNoon Update</Form.Label>
                                    <Form.Control as="textarea" onChange={(e)=>setAftUpdate(e.target.value)} type="AfterNoon Update" placeholder="AfterNoon Update" /> 
                                </Form.Group>

                                <Form.Group controlId="formBasicProjectName">
                                    <Form.Label>Achivments</Form.Label>
                                    <Form.Control as="textarea" onChange={(e)=> setAchivment(e.target.value)} rows="3" type="Achivments" placeholder="Achivments" />
                                </Form.Group>
                                
                                <Button onClick={AddTaskDetails} variant="primary" type="submit">
                                  Submit
                                </Button>
                            </Form>
                          </div>

                      </Modal>



				<Table striped bordered hover >
				  <thead style={padding} className="thead-dark">
				    <tr>
				      <th>Dates</th>
				      <th>Morning</th>
				      <th>AfterNoon</th>
				      <th>Achived</th>
				      <th>Action</th>
				    </tr>
				  </thead>
				  <tbody>
				    {data.map((vals,index)=>{
				    				
				    				return(<tr>
				    						  	<th>{vals.Date}</th>
				    							<th className="mw-15">{vals.Morning}</th>
				    							<th className="mw-15">{vals.afterNon}</th>
				    							<th className="mw-15">{vals.Achived}</th>
				    							<th onClick={()=>{EditAction(vals.id, index)}}><a className="btn text-primary"><PencilEdit /></a></th>
				    						</tr>)
				    		    	
				        		})}
				  </tbody>
				</Table>
				</>)
}

export default MyLog;

