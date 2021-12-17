import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestion }  from '../actions/questionsAction'
import QuestionForm from './QuestionForm'
import Questions from './Questions'


class QAContainer extends Component {   
    componentDidMount(){      
        this.props.fetchQuestion()
    }

render() {
    return (
        <div>         
            <QuestionForm /> 
            <Questions />     
        </div>
        )
    }
}

export default connect(null, {fetchQuestion})(QAContainer);