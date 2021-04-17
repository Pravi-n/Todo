import {Table} from "react-bootstrap";
import axios from "axios";
import React,{  useState, useEffect, lazy } from "react";
import {Button, Form} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PencilEdit from '@material-ui/icons/BorderColor';
import { httpGet, httpPost } from "../httpService";
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
  clickable:{

  },
  not_clickable:{
	  
  }
}))



const MyLog=()=>{
	const padding={
		height:"30px",
		padding:"30px 0"
	}
	const editLog= async (e)=>{
		e.preventDefault();
		var flag_ML = (MorUpdate.length >0 ? 1 : 0);
		var flag_AL = (AftUpdate.length >0 ? 1 : 0);
		var flag_AchL = (Achievement.length >0 ? 1 : 0);
		
		const dataToAdd={
			_id : id,
			Morning_Log : MorUpdate,
			Afternoon_Log : AftUpdate,
			Achievements : Achievement,
			flag_ML : flag_ML,
			flag_AL : flag_AL,
			flag_AchL : flag_AchL
		}
		console.log("Inside edit log");
		console.log(dataToAdd);
      const data = await httpPost("https://quiet-dusk-10883.herokuapp.com/log/editLog",dataToAdd)
      console.log(data);
        setOpen(false);
		setMorUpdate("");
		setAftUpdate("");
		setAchievement("");
        activateLogs();
        //history.push("/myLog");
	}

	const addLog = async () =>{
		const dataToAdd={
			UserId : 1,
			Morning_Log : "",
			Afternoon_Log : "",
			Achievements : "",
			flag_ML : 0,
			flag_AL : 0,
			flag_AchL : 0
		}
		const data = await httpPost("https://quiet-dusk-10883.herokuapp.com/log/addLog",dataToAdd);
		console.log("addedData",data);
		activateLogs();
	}

	// let  tests = [
	// 	{Morning:'1. Lets do it'
	// 	, id:'1'
	// 	, afterNon:"do with ui"
	// 	, Achived:"updated list"
	// 	, userName:"kelvin"
	// 	, Date:"1/12/2020"},
	//     {Morning:'go for it', id:'2', afterNon:"report to umang sir", Achived:"updated list", userName:"kelvin", Date:"2/12/2020"},
	//     {Morning:'djvhfbv', id:'3', afterNon:"meeting with hemanshu sir", Achived:"updated list", userName:"kelvin", Date:"3/12/2020"},
	// ]
	// const [data, setData] = useState(tests);
	// const [specData, setSpecData] = useState(null);
	const [id, setId] = useState('');
	const classes = useStyles();
    const [modalStyle] = useState(getModelStyle);
    const [MorUpdate, setMorUpdate] = useState("");
    const [OpenAadd, setsetOpenAadd] = useState(false);
    const [AftUpdate, setAftUpdate] = useState("");
    const [Achievement, setAchievement] = useState("");
	const [open, setOpen] = useState(false);
	const [logs, setLogs] = useState([]);

  useEffect(() => {
	  checkForLog();
    activateLogs();
  }, []);

  const activateLogs =async () => {
	  const UserId = 1;
    console.log("Inside logs");
    const data = await httpPost("https://quiet-dusk-10883.herokuapp.com/log/getLogsById",{UserId});
	console.log(data.data);
    setLogs(data.data);
  }

const checkForLog = async () =>{
	const searchData = {
		UserId : 1,
		date : new Date().toDateString()
	}
	const data = await httpPost("https://quiet-dusk-10883.herokuapp.com/log/getLogsByDateAndUserId",searchData);
	if(data.data.length === 0)
	{
		addLog();
		console.log("data by date",data)
	}
}
    //const [posts, setPosts] = useState([]);
    

	const EditAction =(vals, index)=>{
		//setSpecData(index);
		const tempDate = new Date(vals.Log_Date);
		console.log(tempDate);
		console.log(new Date().toDateString());
		if (tempDate.toDateString() === new Date().toDateString())
		{
			setId(vals._id);
			setOpen(true);
		}
		else
		{
			setOpen(false);
		}

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
                                    <Form.Label>Achievements</Form.Label>
                                    <Form.Control as="textarea" onChange={(e)=> setAchievement(e.target.value)} rows="3" type="Achivments" placeholder="Achivments" />
                                </Form.Group>
                                
                                <Button onClick={editLog} variant="primary" type="submit">
                                  Submit
                                </Button>
                            </Form>
                          </div>

                      </Modal>



				<Table striped bordered hover >
				  <thead style={padding} className="thead-dark">
				    <tr>
				      <th style={{minWidth:'15rem'}}>Dates</th>
				      <th style={{minWidth:'15rem'}}>Morning</th>
				      <th style={{minWidth:'15rem'}}>AfterNoon</th>
				      <th style={{minWidth:'15rem'}}>Achived</th>
				      <th style={{minWidth:'15rem'}}>Action</th>
				    </tr>
				  </thead>
				  <tbody>
				    {logs.map((log,index)=>{
				    				
				    				return(<tr>
				    						  	<th>{`${new Date(log.Log_Date).getDate()}-${new Date(log.Log_Date).getMonth()+1}-${new Date(log.Log_Date).getFullYear()}`}</th>
				    							<th className="mw-15">{log.Morning_Log}</th>
				    							<th className="mw-15">{log.Afternoon_Log}</th>
				    							<th className="mw-15">{log.Achievements}</th>
				    							<th  onClick={()=>{EditAction(log, index)}}><a className="btn text-primary" > {(new Date(log.Log_Date).toDateString()===new Date().toDateString())?<PencilEdit />:null} </a></th>
				    						</tr>)
				    		    	
				        		})}
				  </tbody>
				</Table>
				</>)
}

export default MyLog;

