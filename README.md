# Project 2 Overview


## Project Description

A simple web-based audio player, to play audio files using React and an API (SoundCloud)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Navigation to routes
- Random joke
- Search for joke

#### PostMVP EXAMPLE

- Allow user to choose favorites 
- Save their choices in firebase
- Add user auth

## React Component Hierarchy

App > Header > Nav

App > Search > JokesList > JokeItem

App > RandomJoke

App > Footer

### State Components

App

### Functional Components
Search, JokesList, JokeItem, RandomJoke, Header, Nav, Footer

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Nav | This will render the nav |
| Search | This will render the search input text and button | 
| JokesList | This will render the list of jokes returned from search |
| JokeItem | This will render the joke item in the list | 
| RandomJoke | This will render the random joke with button to randomize joke | 
| Footer | This will render the footer include the link to github and api | 


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up app | H | .5hrs| .5hrs | .5hrs |
| Random | H | 2hrs| 2.5hrs | 2.5hrs |
| Search Form | H | 3hrs| 3.5hrs | 2.5hrs |
| Footer and Header | H | 3hrs| 3.5hrs | 1.5hrs |
| React Router | H | 2hrs| 1.5hrs | 1.5hrs |
| Style | H | 2hrs| 2.5hrs | 2.5hrs |
| Total | H | 12.5hrs| 14hrs | 11hrs |

## Helper Functions

| Function | Description | 
| --- | :---: |  
| Footer | This component could be use in playground projects | 

## Additional Libraries
 
[icanhazdadjoke API](https://icanhazdadjoke.com/api)
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
