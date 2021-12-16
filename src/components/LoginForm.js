import React, { Component } from 'react'
import { connect } from 'react-redux'


class LoginForm extends Component {

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
        this.props.loginUser(this.state)
    }
    
    render() {
        return ( 
            <div>       
            <h2>Welcome Back Please Login To See What New In The Community</h2>   
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleChange} name="username"/>
                    <br></br><br></br>
                    <label>Password: </label>
                    <input type='password' value={this.state.passowrd} onChange={this.handleChange} name="password"/>
                    <br></br><br></br>
                    <input type='submit' value="Login"/>
                </form> 
            </div>           
        )
    }
}

export default connect(null)(LoginForm);