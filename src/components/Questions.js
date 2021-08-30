import React from 'react'
import { connect } from 'react-redux'


 const Questions = ({question}) => {
    // debugger
    return (
        <div>
            {question.map(q => <ul><li key={q.id}> {q.title} {q.language} {q.question}</li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {

    return { question: state.question }
}

export default connect(mapStateToProps)(Questions);