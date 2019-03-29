import React from 'react'
import { Route } from "react-router-dom"
import Search from './Search'
import Header from './Header'
import Footer from './Footer'

function Main() {
        return (
            <Route>
            <div className='main'>
                <Header />
                <Search />
                <br />
                <Footer />
            </div>
            </Route>
        )
    }

export default Main