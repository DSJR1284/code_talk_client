import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestion }  from '../actions/questionsAction'
import AnswersForm from './AnswersForm'
import QuestionForm from './QuestionForm'



class QAContainer extends Component {

    componentDidMount(){
        this.props.fetchQuestion()
    }

render() {
    return (
        <div>
            QA Container          
            <QuestionForm /> 
            <AnswersForm />     
        </div>
        )
    }
}

export default connect(null, {fetchQuestion})(QAContainer);