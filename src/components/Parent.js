import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parent : 'Kumar'
        }
    }
    
    btnHandler = (childName) => {
        alert(`Parent is ${this.state.parent} and child is ${childName}`);
    }
    render() {
        return (
            <div>
                <Child btnHandler={this.btnHandler}/>
            </div>
        )
    }
}
