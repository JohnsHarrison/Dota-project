import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.jpg"

function SubNav({selectedGame}){
    return(
         <div className={`subNavBar${selectedGame !== "home" ? " subNavBar--open" : ""}`}>

            {
            selectedGame ==="dota2" ?  <div><NavLink to={"/match"}>Match</NavLink>
           
            <NavLink to={"/playerprofile/140288368"}>Player Profile</NavLink>  
            <NavLink to={"/recentmatches"}>Recent Matches</NavLink>
            
            <NavLink to={"/herodetails/1"}>Hero Details</NavLink>
            <NavLink to={"/news"}>News</NavLink>
            <NavLink to={"/test"}>Test</NavLink></div> : null
            }
            {/* <NavLink to={"/match"}>Match</NavLink>
           
            <NavLink to={"/playerprofile/140288368"}>Player Profile</NavLink>  
            <NavLink to={"/recentmatches"}>Recent Matches</NavLink>
            
            <NavLink to={"/herodetails/1"}>Hero Details</NavLink>
            <NavLink to={"/news"}>News</NavLink>
            <NavLink to={"/test"}>Test</NavLink> */}
         </div>
    )
}

export default SubNav