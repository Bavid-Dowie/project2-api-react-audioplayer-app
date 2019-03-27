import React, { Component } from 'react'
import SongPlayer from './SongPlayer'
import ReactPlayer from 'react-player'
import './TrackBox.css'

export default class TrackBox extends Component {
    renderData() {
        if (this.props.searchresult) {
            let playerData = this.props.searchresult
            return this.props.searchresult.map(player => {
                return (
                    <div key={player.id} className='playerBox'>
                        <ReactPlayer key={player.id} url={player.permalink_url} />
                        {/* <h4><a className='track-1' href={player.permalink_url}>{player.title}</a></h4>
                        <h6>{player.genre}</h6> */}
                    </div>
                    )
                }
                )
            }
        }
        render() {
            return (
                <div className='trackBox'>
                {this.renderData()}
            </div>
        )
    }
}