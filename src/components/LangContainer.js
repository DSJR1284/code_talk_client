import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchLang }  from '../actions/langAction'
import LangForm from './LangForm'


class LangContainer extends Component {

    componentDidMount(){
        this.props.fetchLang()
    }

render() {
    return (
        <div>
            LangContainer 
            <h3>Don't See Your Coding Language
            Please Fill Out The Form Below</h3>
            <LangForm /> 
        </div>
        )
    }
}

export default connect(null, {fetchLang})(LangContainer);
