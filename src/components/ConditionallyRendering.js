import React, { Component } from 'react'

export default class ConditionallyRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    
    render() {

        // short circuit ( returns null if false )
        // return this.state.isLoggedin && <div><p>logged in</p></div>

        // terrinary
        return this.state.isLoggedin ? 
        (<div><p>logged in</p></div>) :
        (<div><p>Not logged in</p></div>)

        // return (
        //     <div>
        //         <h2>Conditionally Rendering</h2>

                
        //     </div>
        // )
    }
}
