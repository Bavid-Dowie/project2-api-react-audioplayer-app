import React, { Component } from 'react'
import ReactPlayer from 'react-player'

// export default class SongPlayer extends Component {


function SongPlayer(props)  {
    console.log(`This is line 7 songplayer`)
    console.log(props.info[0].permalink_url)
    return (
        <div>
            <ReactPlayer url={props.info[0].permalink_url} />
        </div>
    )
}

export default SongPlayer