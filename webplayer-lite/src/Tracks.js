import React, { Component } from 'react'
import './Tracks.css'

class Tracks extends Component {
    render() {
        const tracks = [
            {
                title: "Drum Loop 1",
                url: "https://soundcloud.com/user890016827/drums-loop"
            },
            {
                title: "Drum Loop 2",
                url: "https://soundcloud.com/user890016827/drums-loop"
            },
            {
                title: "Drum Loop 3",
                url: "https://soundcloud.com/user890016827/drums-loop"
            },
            {
                title: "Drum Loop 4",
                url: "https://soundcloud.com/user890016827/drums-loop"
            },

        ]
        return (
            <div className='tracks'>
                <a className='track-1' href={tracks[0].url}>{tracks[0].title}</a>
                <a className='track-2' href={tracks[1].url}>{tracks[0].title}</a>
                <a className='track-3' href={tracks[2].url}>{tracks[0].title}</a>
                <a className='track-4' href={tracks[3].url}>{tracks[0].title}</a>
            </div>
        )
    }
}

export default Tracks