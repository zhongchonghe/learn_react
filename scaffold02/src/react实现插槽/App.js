import React, { Component } from 'react'
import NavBar from './NavBar'
export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar leftSlot={<span>left</span>} />
                <NavBar centerSlot={<span>center</span>} />
                <NavBar rightSlot={<span>right</span>} />
            </div>
        )
    }
}

