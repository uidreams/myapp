// tasks
// 1. skills dropdown validations
// 2. reset form
// 3. add form validation
// 4. unit testing

import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             skills: ['Angular', 'React', 'Vue'],
             description: ''
        }
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleSkill = (e) => {
        this.setState({ skill: e.target.value })
    }
    handleDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name = ${this.state.name}, Skill = ${this.state.skill}, Description = ${this.state.description}`);
    }
    render() {
        const {name, description} = this.state;
        return (
            <div>
                <h2>Employee Form component</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Employee name </label><br/>
                    <input type="text" onChange={this.handleName} value={name}/><br/>
                    <label>Skill </label><br/>
                    <select onChange={this.handleSkill}>
                        <option>Select skill</option>
                        {this.state.skills.map((skill, index) => <option key={index}>{skill}</option>)}
                    </select><br/>
                    <label>Description </label><br/>
                    <textarea onChange={this.handleDescription} value={description}></textarea><br/>
                    <button type="submit">Submit</button>
                </form>
                <p>Name = {this.state.name}, Skill = {this.state.skill}, Description = {this.state.description}</p>
            </div>
        )
    }
}
