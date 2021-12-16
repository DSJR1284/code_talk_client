import React from 'react'
import { connect } from 'react-redux'
// import { fetchQuestion }  from '../actions/questionsAction'

const Questions = (props) => { 

    function renderQuestions() {
        return(
            <div>
                <ul>
                    {props.questions.question.map(question => <li key={question.id} > 
                            {question.title} {question.language} {question.descriptions} 
                            <ol>
                                {props.questions.question.answers.map(a => <li key={question.id}>{a.response}</li>)}
                            </ol> 
                        </li>)}
                </ul>
            </div>
        )  
    }

if (props.question.questions) {
        return  renderQuestions() 
} else {
        return null
}
}

const mapStateToProps = state => {
    return { question: state.questions ,descriptions: state.descriptions }
}

export default connect(mapStateToProps)(Questions);