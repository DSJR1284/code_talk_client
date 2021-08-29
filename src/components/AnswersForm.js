import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAnswer } from '../actions/answersAction'

class AnswerForm extends Component {

    state = {
        title: ''
       
    }

    handleChange = e => {
        const {name, value} = e.target 
        
        this.setState({
            [name]: value
        })      
    }

    handleSubmit = e => {
        this.props.addAnswer(this.state)
    }
    
    render() {
        return (            
            <form onSubmit={this.handleSubmit}>
                <label>Answer: </label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name="title"/>
                <input type='submit' value="Add New Language"/>
            </form>           
        )
    }
}

export default connect(null, {addAnswer})(AnswerForm);