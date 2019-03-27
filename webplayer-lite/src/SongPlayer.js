import React, { Component } from 'react'
import ReactPlayer from 'react-player'

// export default class SongPlayer extends Component {


function SongPlayer(props)  {
    console.log(`This is line 7 songplayer`)
    console.log(props.info[0].permalink_url)
    console.log(props.info)
    
    return (
        <div>
            <ReactPlayer url={props.info[0].permalink_url} />
            {/* <ReactPlayer url={props.info} /> */}
        </div>
    )
}

export default SongPlayer