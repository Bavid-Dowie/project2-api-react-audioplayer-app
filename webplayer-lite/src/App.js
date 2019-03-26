import React, { Component } from 'react'
import Tracks from './Tracks'
import './App.css'
// import dotenv from 'dotenv'

// dotenv.config();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchresult:  '',
      data: []
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount() {
  }
  
  // fetchData() {
  //   const API_KEY = process.env.REACT_APP_SCLOUD_API_KEY
  //   let query = this.state.searchresult
  //   fetch(`http://api.soundcloud.com/tracks?client_id=${API_KEY}&q=${query} loop`)
  //   .then(response => response.json())
  //   .then(parsedJSON => console.log(parsedJSON))
  //   .catch(error => console.log('parsing failed'))
  // }
  
  handleChange(e) {
  //  console.log(e)
    this.setState({
      searchresult: e.target.value
    })
    // console.log(`this.state.searchresult is ${this.state.searchresult}`)
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_SCLOUD_API_KEY
    let query = this.state.searchresult
    console.log( `Show me the word ${this.state.searchresult}`)
    fetch(`http://api.soundcloud.com/tracks?client_id=${API_KEY}&q=${query}&`)
    .then(function (response) {
        return response.json();
      })
      .then(jsonData => {
        this.setState(prevState => ({
          data: jsonData
        }))
      })
    }

    render() {
      return (
        <div className="App">
        <h1>SoundCloud WebPlayer - App.js</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' value={this.state.searchresult} onChange={e => this.handleChange(e)}/>
          <input type='submit' search='Submit' />
        </form>
        <br/>
        {/* <p>{this.state.searchresult}</p> */}
        <Tracks searchresult={this.state.data}/>
        <footer>This is the Footer - Footer.js</footer>
      </div>
    )
  }
}

export default App;