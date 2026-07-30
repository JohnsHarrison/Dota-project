import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.jpg"

function Nav({setSelectedGame}){

    function onClick(value){
        return setSelectedGame(value)
    }

    return(
         <div className="navBar">
            <img src={Logo}  data-value="home" onClick={(e) => onClick(e.target.dataset.value)}/>
            <p data-value="dota2" onClick={(e) => onClick(e.target.dataset.value)}>Dota 2</p>
            <p data-value="cs2" onClick={(e) => onClick(e.target.dataset.value)}>StarCraft 2</p>
            <p data-value="counterstrike" onClick={(e) => onClick(e.target.dataset.value)}>Counter Strike 2</p>
            <p data-value="lol" onClick={(e) => onClick(e.target.dataset.value)}>League of Legends</p>
            <p data-value="valorant" onClick={(e) => onClick(e.target.dataset.value)}>Valorant</p>

            {/* <NavLink to={"/"}><img src={Logo} alt="logo"/></NavLink> */}
            {/* <NavLink to={"/match"}>Match</NavLink>
           
            <NavLink to={"/playerprofile/140288368"}>Player Profile</NavLink>  
            <NavLink to={"/recentmatches"}>Recent Matches</NavLink>
            
            <NavLink to={"/herodetails/1"}>Hero Details</NavLink>
            <NavLink to={"/news"}>News</NavLink>
            <NavLink to={"/test"}>Test</NavLink> */}
         </div>
    )
}

export default Nav