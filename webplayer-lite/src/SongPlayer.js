import React, { Component } from 'react'
import ReactPlayer from 'react-player'

// export default class SongPlayer extends Component {


function SongPlayer(props)  {
    console.log(`This is line 7 songplayer`)
    console.log(props.info[0].permalink_url)
    console.log(props.info)
    const playerData = props.info.map(player => {
        return (
        <ReactPlayer key={player.id} url={player.permalink_url} />
        )
    })
    
    return (

        <div>
            {playerData}
        </div>
    )
}

export default SongPlayer