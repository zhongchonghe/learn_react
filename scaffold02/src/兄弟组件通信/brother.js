import React, { PureComponent } from 'react'


import { EventEmitter } from 'events'

const events = new EventEmitter();

class Home extends PureComponent {

    constructor() {
        super()
        this.state = {
            count: 0
        }

    }

    componentDidMount() {
        events.addListener('sendMsg', this.getMsg)
    }
    componentWillUnmount() {
        events.removeAllListeners('sendMsg', this.getMsg)
    }


    getMsg = (msg) => {
        console.log(msg);
        console.log(this);
        this.setState({
            count: msg
        })
    }


    render() {
        const { count } = this.state
        return (
            <div>{count}</div>
        )
    }

}
class Profile extends PureComponent {
    render() {
        return (
            <div>
                <button onClick={() => this.btnClick()}>+</button>
            </div>
        )
    }
    btnClick() {
        events.emit('sendMsg', 123)
    }
}







export default class brother extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profile />
            </div>
        )
    }
}
