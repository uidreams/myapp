import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count)})
        console.log(this.state.count)
    }
    incrementByFive = () => {
        this.setState( prevState => ({
            count: prevState.count + 5
        }), () => { console.log(this.state.count)})
        
    }
    
    render() {
        return (
            <div>
                <p>Count is: {this.state.count}</p>
                <button onClick={this.incrementByFive()}>Counter</button>
            </div>
        )
    }
}
