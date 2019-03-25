import React, { Component } from 'react';
import Tracks from './Tracks'
import './App.css';
import dotenv from 'dotenv';

dotenv.config();

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      kind: '',
      title: '',
      data: {}
    }
  }
  
  componentDidMount(){
    this.fetchData();
  }
  
  fetchData(){
    const API_KEY = process.env.REACT_APP_SCLOUD_API_KEY;
    let query = 'drums'
    fetch(`http://api.soundcloud.com/tracks?client_id=${API_KEY}&q=${query} loop`)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON))
    .catch(error => console.log('parsing failed'))

  }
  handleChange(e) {  
    this.setState({ 
      title: e.target.title
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    fetch(`http://api.soundcloud.com/tracks?client_id=70754678653a644af108cb068fd1f18a&`)
    .then(function (response) {
      return response.json();
    }
    )
    .then(jsonData => {
      console.log(jsonData)
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
          <input type='text' title={this.state.title} onChange={e => this.handleChange(e)}></input>
          <input type='submit' title='Submit' ></input>
        </form>
        <p>{this.state.title}</p>   
        <Tracks/>
      </div>
    );
  }
}

export default App;
