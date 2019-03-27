import React, { Component } from 'react'

import Search from './Search'
import Header from './Header'
import Footer from './Footer'
import './App.css'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <br />
        
        <Footer />
      </div>
    )
  }
}

export default App;