import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestion } from '../actions/questionsAction'
import AnswersForm from './AnswersForm'


const Questions = (props) => { 
    console.log(props)
    function renderQuestions() {      
        return(
            <div>              
                {props.question.map (question =><ul> 
                    <div key={question.id}>                    
                        {console.log(question.description)}
                        <ul><li>Title:{question.title}</li> 
                            <li>Language:{question.language}</li>
                            <li>Question:{question.description}</li></ul> 
                            <ol>{question.answers.map(a => 
                                <li key={a.id}>Answers:<br></br>
                                {a.response}</li>)} 
                            <AnswersForm />         
                        </ol>
                    </div>
                        </ul>)}
            </div>
        )  
    }

if (props.question) {
    return renderQuestions() 
} else {
        return null
}
}

const mapStateToProps = state => {
    return { question: state.questions ,descriptions: state.descriptions }
}

export default connect(mapStateToProps,fetchQuestion)(Questions);