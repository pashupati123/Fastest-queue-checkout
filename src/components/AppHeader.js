import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import LogOutButton from '@material-ui/icons/PowerSettingsNew'
import Grid from '@material-ui/core/Grid'
import logo from '../static-contents/logopng.png'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 2,
    textAlign: 'center',
    color: '#cc0000',
  },
  button: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  input: {
    display: 'none',
  },
  fab: {
    margin: 2,
  },
  absolute: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
})

let HeaderTextStyle = {
  position: 'relative',
  marginLeft: '6%',
  fontFamily: 'HelveticaforTargetLight,Arial',
  fontSize: '12px',
}
class AppHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openFeedbackDialog: false,
      openAboutDialog: false,
      openPrintHolidayDialog: false,
      holidayList: [],
    }
  }
  renderFeedBack = () => {
    window.open('https://pages.git.target.com/EEL/dojo/', '_blank')
  }
  closeFeedBackDialog = () => {
    this.setState({
      openFeedbackDialog: false,
    })
  }

  closePrintHolidayDialog = () => {
    this.setState({
      openPrintHolidayDialog: false,
    })
  }
  openAboutDialog = () => {
    this.setState({
      openAboutDialog: true,
    })
  }
  closeAboutDialog = () => {
    this.setState({
      openAboutDialog: false,
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const { userName } = this.props
    const classes = styles()

    return (
      <div
        style={{
          height: '60px',
          backgroundColor: '#cc0000',
          color: 'white',
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ paddingLeft: '2%', paddingTop: '-1%' }}
          >
            
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ textAlign: 'right', paddingRight: '4%' }}
          >
            <IconButton
              style={{
                marginLeft: '5px',
                width: '80px',
                color: 'white',
                fontFamily: 'HelveticaforTargetLight,Arial',
                fontWeight: 'lighter',
                position: 'relative',
                bottom: '13px',
              }}
              className={classes.button}
              aria-label="Logout "
              onClick={userName[1]}
            >
              <LogOutButton /> <h6 style={HeaderTextStyle}>Logout</h6>
            </IconButton>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '3%' }}>
            
           
            <span style={{ display: 'inline' }}>
              
              <span
                style={{
                  position: 'relative',
                  bottom: '80px',
                  fontSize: '20px',
                  marginBottom:'-8%',
                  fontFamily: 'HelveticaforTargetBold,Arial',
                }}
              >
                 <img
                src={logo}
                alt="logofile"
                style={{
                  height: '40px',
                  width: '40px',
                  marginLeft: '-3%',
                  marginBottom:'-3%'

                }}
              />
                QuickCheckout
              </span>{' '}
            </span>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AppHeader
