import React, { Component } from 'react'
import axios from 'axios'

export class Axioscall extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }
  apicall = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      this.setState({ data: response.data })
      console.log(response.data)
    })
  }

  componentDidMount = () => {
    this.apicall()
  }
  render() {
    return (
      <div>
        <h1>Axios call</h1>
      </div>
    )
  }
}

export default Axioscall
