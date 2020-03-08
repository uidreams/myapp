import React, { Component } from 'react'
import axios from 'axios'

export class HttpPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            formData: {
                userid: '1',
                title: 'kumar',
                body: 'mateti'
            }

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    // changeHandler = () => {
    //     this.setState({(e) => { [e.target.name]: e.target.value }})
    // }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.formData)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state.formData)
            .then((response) => { console.log(response.data) })
            .catch((err) => { console.log(err) })
    }
    render() {
        const { userid, title, body } = this.state.formData;
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <label>userid</label><input type="text" name="userid" value={userid} onChange={this.changeHandler}/><br/>
                    <label>title</label><input type="text" name="title" value={title} onChange={this.changeHandler}/><br/>
                    <label>body</label><input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default HttpPost
