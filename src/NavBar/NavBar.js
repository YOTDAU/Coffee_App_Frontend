import React from 'react'
import { Link } from "react-router-dom"


const NavBar = ({ signOut }) => {
    return(
        <nav>
            {localStorage.token ? <button onClick={signOut}>Sign Out</button> : <Link to="/signin">Sign In</Link>}
            -     
            <Link to="landing">Home</Link>
                        
        </nav>
    )
}

export default NavBar