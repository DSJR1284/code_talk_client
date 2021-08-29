import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addUser } from '../actions/usersAction'

class SignUpForm extends Component {

    state = {
        username: '',
        password: ''
       
    }

    handleChange = e => {
        const {name, value} = e.target 
        
        this.setState({
            [name]: value
        })      
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
    }
    
    render() {
        return ( 
            <div>       
            <h2>Please Fill Out The From And Join Our Community</h2>   
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleChange} name="username"/>
                    <br></br><br></br>
                    <label>Password: </label>
                    <input type='password' value={this.state.passowrd} onChange={this.handleChange} name="password"/>
                    <input type='submit' value="Join The Community"/>
                </form> 
            </div>           
        )
    }
}

export default connect(null, {addUser})(SignUpForm);