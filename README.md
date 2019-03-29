# Project 2 Overview


## Project Description

A simple SoundCloud aggregator to fetch audio by 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
  

#### MVP
- Find and use external api 
- React Router for landing page
- Search SoundCloud library by 'keyword'
- Render SoundCloud data onto page
- Play audio on page using React Player

#### PostMVP

- Personl user login authorization
- Save favorite songs
- Upload audio files to personal SoundCloud page

## React Component Hierarchy

App > Landing > Main

App > Main > Header

App > Main > Search > TrackBox > ReactPlayer

App > Main > Footer

### State Components

App

### Functional Components
Main, Landing, Header, Search, TrackBox, Footer

| Component | Description | 
| --- | :---: |  
| Landing | Landing page linked to Main via React Router |
| Main | This will render the Header - Search - Footer |
| Header | This will render the header | 
| Search | This will render the search input text and button - and call TrackBox component | 
| TrackBox | This will render the ReactPlayer to play fetched data | 
| Footer | This will render the footer include the link to github and api | 

## Helper Functions

| Function | Description | 
| --- | :---: |  
| TrackBox | This component could be use in apps to play fetched media files directly in browser | 

## Additional Libraries
 
[SoundCloud API](https://api.soundcloud.com/)
## Code Snippet

All state for app is contained in App.js
```javascript
this.state = {
	randomJoke: '',
	jokes: [],
	term: ''
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR**: Unexpected token < in JSON at position 0                               
**RESOLUTION**: 
https://daveceddia.com/unexpected-token-in-json-at-position-0/

Sent request with header to accept json data
```javascript
randomAPI() {
    let api = 'https://icanhazdadjoke.com/'
    fetch(api,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': ' My Library (https://github.com/tara-fenton/dad-jokes)'
        }
      }
    ).then(response => response.json())
      .then(json => {
        this.setState({ randomJoke: json.joke })
      }).catch(e => console.log(e))
  }
  ```

  logic setting up button events [testing events](https://github.com/tara-fenton/dad-jokes/commit/1984c6e5eb6a2cbd91f83a00b224d2f0c8fddc55)

   logic setting up search events [testing search events](https://github.com/tara-fenton/dad-jokes/commit/7726cea8f60cb4c5410cf5964d5ebde5b59485ed)
