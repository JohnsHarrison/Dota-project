import { NavLink } from "react-router-dom"

function Nav(){
    return(
         <nav className="header">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/match"}>Match</NavLink>
            {/* remove player id after testing */}
            <NavLink to={"/playerprofile/140288368"}>Player Profile</NavLink>  
            <NavLink to={"/recentmatches"}>Recent Matches</NavLink>
            {/* remove hero aftertesting */}
            <NavLink to={"/herodetails/1"}>Hero Details</NavLink>
         </nav>
    )
}

export default Nav