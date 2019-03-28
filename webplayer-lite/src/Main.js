import React, { Component } from 'react'
import Search from './Search'
import Header from './Header'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <br />
                <Footer />
            </div>
        )
    }
}
