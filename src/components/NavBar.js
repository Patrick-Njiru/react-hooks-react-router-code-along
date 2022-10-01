import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
  display: 'inline-block',
  textAlign: 'center',
  width: '60px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

function NavBar() {
    return (
      <div>
        <NavLink 
        exact 
        to="./" 
        style={linkStyles} 
        activeStyle={{ background: "darkblue"}} 
        >
        Home
      </NavLink>
      <NavLink 
        exact 
        to="./about" 
        style={linkStyles} 
        activeStyle={{ background: "darkblue"}} 
        >
        About
      </NavLink>
      <NavLink
      exact
      to="./messages"
      style={linkStyles}
      activeStyle={{background: "darkblue"}}
      >
        Messages
      </NavLink>
      <NavLink 
        exact 
        to="./login" 
        style={linkStyles} 
        activeStyle={{ background: "darkblue"}} 
        >
        Login
      </NavLink>
      <NavLink
        exact
        to="./signup"
        style={linkStyles}
        activeStyle = {{ background: "darkred"}}
        >
        Sign up
      </NavLink>
      </div>
    )
}

export default NavBar