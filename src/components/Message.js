import React, { Component } from 'react'

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : 'Welcome visitor'
        }
    }
    changeMessage = () => {
        this.setState({
            message: 'Thanks for Subscribing'
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}
