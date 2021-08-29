import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addLang } from '../actions/langAction'

class LangForm extends Component {

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
        e.preventDefault()
        // console.log(this.props.addLang)
         this.props.addLang(this.state)
    }
    
    render() {
        return (            
            <form onSubmit={this.handleSubmit}>
                <label>Language Title:</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name="title"/>
                <input type='submit' value="Add New Language"/>
            </form>           
        )
    }
}

export default connect(null, {addLang})(LangForm);
