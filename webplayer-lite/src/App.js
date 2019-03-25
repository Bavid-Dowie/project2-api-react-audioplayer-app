import React, { Component } from 'react';
import './App.css';
import dotenv from 'dotenv';

dotenv.config();

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      artist: '',
      tracks: '',
      current: {}
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    const KEY = process.env.REACT_APP_SCLOUD_API_KEY
    fetch(`http://api.soundcloud.com/tracks?client_id=${KEY}&q`)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('parsing failed'))
  }


  render() {

    return (
      <div className="App">
        <h1>SoundCloud WebPlayer - App.js</h1>        
      </div>
    );
  }
}

export default App;
