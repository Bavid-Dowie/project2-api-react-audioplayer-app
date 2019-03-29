import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Landing from './Landing'
import Main from './Main'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <Landing />} /> 
          <Route exact path="/main" render= {() => <Main />} /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default App;