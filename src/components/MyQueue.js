import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);

  

  const handleClose = () => {
    props.handleclose(false)
  };

  return (
    <div>
      
      <Dialog
        open={props.openvalue}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          <span style={{fontFamily:"Roboto,Helvetica,Arial, sans-serif",fontWeight:"bold",alignItems:"center",fontSize:"20px"}}>My Queue with Minimum Wait Time</span>
        </DialogTitle>
        <DialogContent>
        
        <span style={{marginTop:"4%",float:"left",marginLeft:"15%",fontFamily:"Roboto,Helvetica,Arial, sans-serif",fontSize:"30px"}}>Counter-1 </span>
          <Button style={{marginRight:"2%",float:"right",backgroundColor:"#0e990b", color:"white",height:"58px",width:"120px",fontSize:"25px"}}><b>10 mins</b></Button>
          
        </DialogContent>
        <DialogActions style={{alignSelf:"center"}}>
          <Button style={{
              height: '35px',
              width: '100px',
              fontSize: '11px',
              fontFamily: 'HelveticaforTargetBold,Arial',
              fontWeight: 'bold',
              backgroundColor:"#cc0000",
              color:"white",
              alignSelf:"center"
             
              
            }} autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button style={{
              height: '35px',
              width: '100px',
              fontSize: '11px',
              fontFamily: 'HelveticaforTargetBold,Arial',
              fontWeight: 'bold',
              backgroundColor:"#cc0000",
              color:"white",
              alignSelf:"center"
              
              
            }} onClick={handleClose} color="primary">
            Locate Me
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
