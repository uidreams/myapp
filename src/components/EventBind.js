import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'welcome'
        }
        this.handleMessage = this.handleMessage.bind(this);
    }
    // handleMessage() {
    //     this.setState({ message: 'Good Bye'})
    // }
    handleMessage = () => {
        this.setState({ message: 'Good Bye'})
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.handleMessage.bind(this)}>click</button> */}
                {/* <button onClick={this.handleMessage}>click</button> */}
                {/* <button onClick={ () => this.handleMessage() }>click</button> */}
                <button onClick={this.handleMessage}>click</button>
            </div>
        )
    }
}
