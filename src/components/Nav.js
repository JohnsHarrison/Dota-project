import { NavLink } from "react-router-dom"

function Nav(){
    return(
         <nav className="header">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/test"}>Test</NavLink>
            {/* remove player id after testing */}
            <NavLink to={"/playerprofile/140288368"}>Player Profile</NavLink>  
         </nav>
    )
}

export default Nav