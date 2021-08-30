import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addQuestion } from '../actions/questionsAction'

class QuestionForm extends Component {

    state = {
        title: '',
        question: '',
        language_id: 1,
        user_id: 4       
    }

    handleChange = e => {
        const {name, value} = e.target 
        
        this.setState({
            [name]: value
        })      
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(e.target)
        this.props.addQuestion(this.state)
    }
    
    render() {
        return (            
            <form onSubmit={this.handleSubmit}>
                <label> Title: </label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name="title"/>
                <label> Question: </label>
                <input type='text' value={this.state.question} onChange={this.handleChange} name="question"/>
                <input type="hidden" defaultValue= {4} onChange={this.handleChange}  name="user_id" />            
                <input type="hidden" defaultValue={1} onChange={this.handleChange}  name="language_id" />
                <input type='submit' value="Ask A Question"/>
            </form>           
        )
    }
}

export default connect(null, {addQuestion})(QuestionForm);