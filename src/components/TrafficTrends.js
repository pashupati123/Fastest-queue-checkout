import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/FormGroup';

import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Todaytraffic from './TodayTraffic';
import Previousdaytraffic from './PreviosDayTraffic';



const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: "#cc000",
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: "#cc0000",
        borderColor: "#cc0000",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#cc0000",
  },
  checked: {},
}))(Switch);

export default function Traffictrend() {
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  if(state.checkedC==false){
      return(
        <FormGroup>
     
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>today</Grid>
            <Grid item>
              <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
            </Grid>
            <Grid item>previous day</Grid>
          </Grid>
        </Typography>
        <Todaytraffic />
      </FormGroup>
      

      )
  }
  else{
  return (
    <FormGroup>
     
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>today</Grid>
        <Grid item>
          <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
        </Grid>
        <Grid item>previous day </Grid>
      </Grid>
    </Typography>
    <Previousdaytraffic />
    
  </FormGroup>
  
  
  )
  }
}
