import React, { Component } from 'react'

class LangForm extends Component {

    state = {
        title: ''
    }

    render() {
        return (            
            <form>
                <label>Language Title:</label>
                <input type='text' value={this.state.title} onChange={this.AddLang} name='title' />
                <input type='submit' value="Add New Language" />
            </form>           
        )
    }
}

export default LangForm;
