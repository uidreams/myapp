import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentA4 extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    { (username) => {
                        return <div>Hello {username}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}
export default ComponentA4
