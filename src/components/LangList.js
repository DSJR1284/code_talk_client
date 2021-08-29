import React from 'react'
import { connect } from 'react-redux'
import { deleteLang } from '../actions/langAction'

 const LangList = ({lang}) => {

    // handleDelete = e => {
    //     this.props.deleteLang(this.state)
    // }



    return (
        <div className ="lang-container">
            {lang.map(l => <ul><li key={l.id}> {l.title}</li></ul> )}
            {/* <button onClick={this.handleDelete}>Remove Language</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return { lang: state.lang }
}

export default connect(mapStateToProps, {deleteLang})(LangList);
