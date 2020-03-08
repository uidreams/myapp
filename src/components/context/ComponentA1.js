import React, { Component } from 'react'
import ComponentA4 from './ComponentA4'
import { userProvider } from './UserContext'

export class ComponentA1 extends Component {
    render() {
        return (
            <div>
                <userProvider>
                    <ComponentA4/>
                </userProvider>
            </div>
        )
    }
}

export default ComponentA1
