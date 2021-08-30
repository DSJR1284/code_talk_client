import React from 'react'
import './App.css'
const  SearchBar = () => {

    const handleChange = (e) =>{
        console.log(e.target.value)
    }   

    return (
        <div>
        <input type='search'
        className='search'
        placeholder="Search Question Here"
        onChange = {handleChange}
        />
        </div>
    )
}

export default SearchBar;