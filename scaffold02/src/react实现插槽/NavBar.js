import React, { Component } from 'react'


 
export default class NavBar extends Component {



    render() {
        const { leftSlot, centerSlot, rightSlot } = this.props
        console.log(this);
        return (
            <div>
                {/* left */}
                {/* center */}
                {centerSlot}
                {/* right */}
                {rightSlot}
                {leftSlot}
            </div>
        )
    }
}
