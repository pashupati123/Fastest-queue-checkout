import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider, useAuth } from '@praxis/component-auth'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Graph from './components/Graph'
import TimeCard from './components/TimeCard'

const current_store = "Mnpls"

const Main = () => {
  const auth = useAuth() // connect to the \`AuthContext\` provided by \`App\` below, using a React hook.
  const { isAuthorized, login, logout, session } = auth // assign variables of same name as properties off of \`auth\`

  useEffect(() => {
    login()
  })

  const state = {
    labels: ['counter-1', 'counter-2', 'counter-3', 'counter-4', 'counter-5', 'counter-6', 'counter-7'],
    datasets: [
      {
        label:'Fastest Checkout Counters',
        backgroundColor: ['#0e990b','#cc0000','#0e990b','orange','#0e990b','#cc0000','#0e990b'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [7, 59, 15, 25, 20, 55, 10]
      }
    ]
}

  return (
    <>
      {isAuthorized() ? ( //conditionally render either a login button or a welcome / logout.
        <>
          <Header userName={[session.userInfo.firstName, logout]} />
          <center style={{marginTop:"-6%"}}><h3 style={{fontFamily:"HelveticaforTargetBold,Arial"}}>Welcome, <span style={{fontSize:"30px"}}>{session.userInfo.firstName}</span> to <span style={{fontSize:"30px"}}>{current_store}</span></h3> </center>
          
          <Graph state={state} />
         
          <br></br>
       
          <TimeCard counter_count={state.labels.length}/>
        
          <br></br>
          <div><BottomNav /></div>
          
        </>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </>
  )
}

const App = () => {
  return (
    <AuthProvider
      clientId="psc_npe_im"
      loginRedirect={`${window.location.href}auth/login`}
    >
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  )
}
export default App
