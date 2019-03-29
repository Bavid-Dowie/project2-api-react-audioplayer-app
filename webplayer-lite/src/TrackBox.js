import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './TrackBox.css'

export default class TrackBox extends Component {
    renderData() {
        if (this.props.searchresult) {
            return this.props.searchresult.map(player => {
                return (
                    <div key={player.id} className='react-player'>
                        <ReactPlayer
                            key={player.id}
                            url={player.permalink_url}
                            width='30vw'
                            height='30vh'
                            fileConfig={{
                                attributes: {
                                    style: {
                                        display: 'block',
                                        width: 'auto',
                                        height: 'auto'
                                    }
                                }
                            }}
                        />
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