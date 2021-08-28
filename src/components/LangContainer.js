import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchLang }  from '../actions/langaction'
import LangForm from './LangForm'

class LangContainer extends Component {

    componentDidMount(){
        this.props.fetchLang()
    }

render() {
    return (
        <div>
            LangContainer 
            <h2>Don't See Your Coding Language
            Please Fill Out The Form Below</h2>
            <LangForm /> 
        </div>
        )
    }
}

export default connect(null, {fetchLang})(LangContainer);
