import { NavLink } from "react-router-dom"

function Nav(){
    return(
         <nav className="header">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/test"}>Test</NavLink>
            <NavLink to={"/playerprofile"}>Player Profile</NavLink>  
         </nav>
    )
}

export default Nav