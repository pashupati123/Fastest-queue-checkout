import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import PreffedCount from './PreffedCounter'
import Coupons from './Coupons'
import Storemap from './Storemap'
  
const wait_time=10


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 190,
       
      },
      
     
     
}));

//const total_counter=



export default function MultipleSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [mapopen, setMapopen] = React.useState(false);
const handleCoupon = () => {
    setOpen(true) 
}
const handleCouponClose = (close) =>{
    setOpen(close)
}
const handlemap = () => {
      setMapopen(true)
  }

  const handlemapclose = (close) => {
      setMapopen(close)
  }
  
  
  return (
    <div>
        <Grid container spacing={3}>
       
       <Grid item xs={4}>
         
       <Card className={classes.root} variant="outlined" style={{height:"140px"}}>
      <CardContent>
        
        <Typography variant="h5" component="h2" style={{fontFamily: 'HelveticaforTargetBold,Arial',textAlign:"center",marginTop:"-6%"}}>

          Total Counter
        </Typography>
        <Divider />
        <br></br>
        <Typography  style={{fontFamily: 'HelveticaforTargetBold,Arial',textAlign:"center",fontSize:"40px",marginTop:"-10%"}} className={classes.pos} color="textSecondary">
        <span >0{props.counter_count} </span>
        <Button
            style={{
              height: '30px',
              width: '120px',
              fontSize: '11px',
              fontFamily: 'HelveticaforTargetBold,Arial',
              fontWeight: 'bold',
              backgroundColor:"#cc0000",
              color:"white",
              marginTop:"-22%"
              
            }}
          
            onClick={handlemap}
          >
            
            <span style={{ marginLeft: '2%' }}>store map</span>
          </Button>
          <Storemap openvalue={mapopen} handleClose={handlemapclose}/>
        </Typography>
      </CardContent>
      
    </Card>
           
       </Grid>
       <Grid style={{marginLeft:"15%"}} item xs={4}>
         
       <Card className={classes.root} variant="outlined" style={{height:"140px"}}>
      <CardContent>
        
      <Typography variant="h5" component="h2" style={{fontFamily: 'HelveticaforTargetBold,Arial',textAlign:"center",marginTop:"-6%"}}>

Wait Time
</Typography>
<Divider />
        <br></br>
        <Typography  style={{fontFamily: 'HelveticaforTargetBold,Arial',textAlign:"center",fontSize:"40px",marginTop:"-10%"}} className={classes.pos} color="textSecondary">
        <span >{wait_time} mins</span>
        <Button
            style={{
              height: '30px',
              width: '120px',
              fontSize: '11px',
              fontFamily: 'HelveticaforTargetBold,Arial',
              fontWeight: 'bold',
              backgroundColor:"#cc0000",
              color:"white",
              marginTop:"-22%"
              
            }}
          
            onClick={handleCoupon}
          >
            
            <span style={{ marginLeft: '2%' }}>check coupons</span>
          </Button>
          <Coupons openvalue={open} handleClose={handleCouponClose}/>
        </Typography>
       
      </CardContent>
      
    </Card>
       </Grid>
       
     </Grid>
        
     <PreffedCount />
      
    </div>
  );
}