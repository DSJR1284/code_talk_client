import React from 'react'
// import { connect } from 'react-redux'
import { fetchQuestion }  from '../actions/questionsAction'
import { connect, useSelector } from 'react-redux'


 const Questions = (props) => { 
    const descriptions = props.fetchQuestion
    

    function renderQuestions() {
        debugger
        return(
            <div>
                <ul>
                    {props.question.question.map(question => <li key={question.id} > 
                            {question.title} {question.language} {question.description} 
                            <ol>
                                  {question.answers.map(a => <li key={a.id}>{a.response}</li>)}
                            </ol> 
                        </li>)}
                </ul>
            </div>
        )  
    }

   if (props.question.question) {
        return  renderQuestions() 
   } else {
       debugger
        return null
   }
}

const mapStateToProps = state => {

    return { question: state.questions ,descriptions: state.descriptions }
}

export default connect(mapStateToProps, {fetchQuestion})(Questions);