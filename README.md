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
  searchresult: '',
  data: []
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR**: Unauthorized API key after deploying to Heroku                               
**RESOLUTION**: 
https://www.slightedgecoder.com/2017/09/09/passing-api-key-heroku-node-application/

Sent request with header to accept json data
```javascript
const API_KEY = process.env.REACT_APP_SCLOUD_API_KEY
let query = this.state.searchresult
fetch(`https://api.soundcloud.com/tracks?client_id=${API_KEY}&q=${query}& loops`)
    .then(function (response) {
        return response.json();
})
    .then(jsonData => {
        this.setState(prevState => ({
            data: jsonData
    }))
})
```

  logic setting up ReactPlayer [testing events](https://github.com/Bavid-Dowie/react-audio-player/commit/47529b717f29818bf6e6b9608eedf4a62648ff8c)

  logic setting up React Router [testing search events](https://github.com/Bavid-Dowie/react-audio-player/commit/5c2c4b2ecd6a0f3db47450972327940463f274db)
