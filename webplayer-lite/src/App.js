import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import WelcomeHome from './WelcomeHome'
import Search from './Search'
import Header from './Header'
import Footer from './Footer'
import './App.css'

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <main>

          {/* <Route exact path="/" render={() => <PlayerExpand />} /> */}
          <Header />
          <Search />
          <br />
          <Footer />

        </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;