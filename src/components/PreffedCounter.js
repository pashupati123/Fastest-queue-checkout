
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const counters =[{"counter_name":"counter-7","wait_time":10},
{"counter_name":"counter-3","wait_time":15},
{"counter_name":"counter-5","wait_time":20}]

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2 style={{fontFamily: 'HelveticaforTargetBold,Arial',textAlign:"center",fontSize:"20px"}}>Preffered Counters (wait time in mins) </h2>
      <Grid container spacing={3}>
      {counters.map((item)=>{
          return(<Grid item xs>
            
         
          <span style={{marginLeft:"20%",marginTop:"9%",fontFamily:"HelveticaforTargetBold,Arial",fontWeight:"bold"}}>{item.counter_name} </span>
          <Button fullWidth="false" style={{float:"right",backgroundColor:"#0e990b", color:"white",height:"32px",fontSize:"30px"}}><b>{item.wait_time}</b></Button>
           

          </Grid>)
      })}
        

        {/* <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid> */}
      </Grid>
      
    
    </div>
  );
}
