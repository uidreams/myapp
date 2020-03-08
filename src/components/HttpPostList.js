import React, { Component } from 'react'
import axios from 'axios'

export default class HttpPostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/postss')
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch(err => {
                this.setState({errorMsg: 'Error response'})
            })
    }
    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
                <p>List of posts</p>
                <ul>
                    {
                    posts.length ? 
                    posts.map(post => <li key={post.id}>{post.title}</li>):
                    null
                    }
                    {
                        <p>{errorMsg}</p>
                    }
                </ul>
            </div>
        )
    }
}

