import React from 'react'
import { connect } from 'react-redux'
import { useDispatch, connect } from 'react-redux'
import { addUser } from '../actions/usersAction'


 const Users = ({user}) => {
    //  console.log(props.user)
    return (
        <div className ="user-container">
            {user.map(u => <div key={u.id}>{u.username}-{u.password} </div>)}
        </div>
    )
}

const mapStateToProps = state => {
    
    return { user: state.user }
} //have aceess 

//dispatch -send data and update. 

export default connect(null, {fetchUSERS})(Users);