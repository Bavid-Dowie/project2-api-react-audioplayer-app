import React, { Component } from 'react'
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom"
import WelcomeHome from './WelcomeHome'
import Search from './Search'
import Header from './Header'
import Footer from './Footer'
=======
import { BrowserRouter, Route, Link } from "react-router-dom"
import WelcomeHome from './WelcomeHome'

>>>>>>> 16d03589ebf8bbfd2bb1d7237004995faac4b2ba
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
<<<<<<< HEAD
        <main>

          {/* <Route exact path="/" render={() => <PlayerExpand />} /> */}
          <Header />
          <Search />
          <br />
          <Footer />

        </main>
=======
          <Route exact path="/" render={() => <WelcomeHome />} />
>>>>>>> 16d03589ebf8bbfd2bb1d7237004995faac4b2ba
        </div>
      </BrowserRouter>
    )
  }
}

export default App;