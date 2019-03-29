import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './WelcomeHome.css'

export default class WelcomeHome extends Component {
  render() {
    return (
      <div>
        <Link to="/main">You landed on the landing page!</Link>
      </div>
    )
  }
}
