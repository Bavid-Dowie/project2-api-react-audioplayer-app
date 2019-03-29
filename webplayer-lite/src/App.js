import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import WelcomeHome from './WelcomeHome'
import Main from './Main'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <WelcomeHome />} /> 
          <Route exact path="/main" render= {() => <Main />} /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default App;