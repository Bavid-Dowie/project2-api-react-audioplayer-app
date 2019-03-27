import React, { Component } from 'react'
import TrackBox from './TrackBox'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchresult: '',
            data: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            searchresult: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const API_KEY = process.env.REACT_APP_SCLOUD_API_KEY
        let query = this.state.searchresult
        fetch(`http://api.soundcloud.com/tracks?client_id=${API_KEY}&q=${query}&`)
            .then(function (response) {
                return response.json();
            })
            .then(jsonData => {
                this.setState(prevState => ({
                    data: jsonData
                }))
            })

    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type='text'
                        value={this.state.searchresult}
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        type='submit'
                        search='Submit'
                    />
                </form>
                <br />
                <TrackBox searchresult={this.state.data} />
            </div>
        )
    }
}
