import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import WelcomeHome from './WelcomeHome'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <WelcomeHome />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;