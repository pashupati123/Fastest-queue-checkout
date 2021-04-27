import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Storetraffic from './Storetraffic'
import MyQueue from './MyQueue'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openqueue, setOpenqueue] = React.useState(false);
  const handlechange = () => {
    setOpen(true)
  }
  const handleClose = (close) => {
    setOpen(close)
  }

  const handlemyqueue = (params) => {
    setOpenqueue(true)
  }
  
  const handlemyqueueclose = (close) => {
    setOpenqueue(close)
  }
  

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{backgroundColor:'#cc0000',marginLeft:'-10%'}}
    >
      <BottomNavigationAction style={{color:'white'}} label="Home" icon={<HomeIcon />}  />
      <BottomNavigationAction style={{color:'white'}} label="My Queue" icon={<CenterFocusStrongIcon />} onClick={handlemyqueue}  />
      <BottomNavigationAction style={{color:'white'}} label="Store Traffic" icon={<AssessmentIcon />} onClick={handlechange}  />
      <Storetraffic openvalue={open} handleClose={handleClose}/>
       <MyQueue openvalue={openqueue} handleclose={handlemyqueueclose}/>
    </BottomNavigation>
  );
}
