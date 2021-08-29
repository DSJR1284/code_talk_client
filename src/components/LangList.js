import React from 'react'
import { connect } from 'react-redux'

 const LangList = ({lang}) => {
    return (
        <div>
            {lang.map(l => <ul><li key={l.id}> {l.title}</li></ul> )}
        </div>
    )
}

const mapStateToProps = state => {
    return { lang: state.lang }
}

export default connect(mapStateToProps)(LangList);
