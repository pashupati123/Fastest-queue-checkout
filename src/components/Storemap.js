import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import logo from '../static-contents/storemap.jpeg'
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  
  const handleClose = () => {
    props.handleClose(false);
  };

  return (
    <div>
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.openvalue}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <span style={{fontFamily:"Roboto,Helvetica,Arial, sans-serif",fontWeight:"bold",alignItems:"center",fontSize:"20px"}}>Your Foot Flow @Mnpls</span>
        </DialogTitle>
        <DialogContent dividers>
        <img
                src={logo}
                alt="logofile"
                style={{
                  height: '400px',
                  width: '400px',
                  marginLeft: '-3%',
                  marginBottom:'-3%'

                }}
              />
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
