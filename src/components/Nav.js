import React from 'react'
import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar">
          
          <ul> 
        <SearchBar className="searchbar" placeholder="Search Question Here" />
          <NavLink to="/" exact >
            <li>Home</li>  
            </NavLink>

            {/* <NavLink to="/signup" exact >
            <li>Sign Here</li>  
            </NavLink>  */}

            <NavLink to="/hub" exact >
            <li>Hub</li>  
            </NavLink>      

            <NavLink to="/about" exact >
            <li>About</li>
            </NavLink>

            <NavLink to="/docs" exact >
            <li>Docs</li>
            </NavLink>

            <NavLink to="/logout"exact>
            <li>Log Out</li>
            </NavLink>

            </ul>           
        </div>
    )
}

export default Nav;