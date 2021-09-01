import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAnswer } from '../actions/answersAction'

class AnswerForm extends Component {

    state = {
        response: '',
        question_id: 1,
        user_id: 2  
       
    }

    handleChange = e => {
        // console.log(e)
        const {name, value} = e.target 
        
        this.setState({
            [name]: value
        })      
    }

    handleSubmit = e => {
        // e.preventDefault()
        // console.log(e.target)
        this.props.addAnswer(this.state)
    }
    
    render() {
        return (            
            <form onSubmit={this.handleSubmit}>
                <label>Answer: </label>
                <textarea type='text' value={this.state.response} onChange={this.handleChange} name="response"/>
                <input type="hidden" defaultValue= {2} onChange={this.handleChange}  name="user_id" />            
                <input type="hidden" defaultValue={1} onChange={this.handleChange}  name="question_id" />
                <input type='submit' value="Answer Question"/>
            </form>           
        )
    }
}

export default connect(null, {addAnswer})(AnswerForm);