import React,{ useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomCard from './card';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    display:'flex',
    margin:'auto',
    textAlign: 'center',
    alignItems:'center',
    justifyContent:'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const [state, setstate] = useState([]);
  useEffect(()=>{
        async function getData(){
        const data  = await fetch("https://quiet-dusk-10883.herokuapp.com/userProfile/readAll");
        const json = await data.json();
        console.log(json.data);
        setstate(json.data);
      }
      getData();
    },[])

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid container item xs={16} spacing={4}>
        {state.map((val)=>{
              return(  
          <Grid item xs={3} key={val._id}>
            <Paper className={classes.paper}>
                <CustomCard userName={val.Name} url = {val.profileUrl} />
            </Paper>
          </Grid>
          )}
        )}
          
        </Grid>
      </Grid>
    </div>
  );
}
