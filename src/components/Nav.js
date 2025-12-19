import { NavLink } from "react-router-dom"

function Nav(){
    return(
         <nav className="header">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/Test"}>Test</NavLink>  
         </nav>
    )
}

export default Nav