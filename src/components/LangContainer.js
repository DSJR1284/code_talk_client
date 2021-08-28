import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchLang }  from '../actions/langaction'

class LangContainer extends Component {

    componentDidMount(){
        this.props.fetchLang()
    }

render() {
    return (
        <div>
            LangContainer  
        </div>
        )
    }
}

export default connect(null, {fetchLang})(LangContainer);
