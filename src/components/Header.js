import React, { Component } from 'react'
import AppHeader from './AppHeader'
export class Header extends Component {
  render() {
    return (
      <div>
        <AppHeader userName={this.props.userName} />
        <br />
      </div>
    )
  }
}

export default Header
