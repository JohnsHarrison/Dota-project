import { useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.jpg"

function Nav(){
    const navigate = useNavigate()

    return(
         <div className="navBar">
            <img src={Logo} data-value="home" onClick={(e) => navigate(`/?game=${e.target.dataset.value}`)}/>
            <p data-value="dota2" onClick={(e) => navigate(`/?game=${e.target.dataset.value}`)}>Dota 2</p>
            <p data-value="sc2" onClick={(e) => navigate(`/?game=${e.target.dataset.value}`)}>StarCraft 2</p>
            <p data-value="counterstrike" onClick={(e) => navigate(`/?game=${e.target.dataset.value}`)}>Counter Strike 2</p>
            <p data-value="lol" onClick={(e) => navigate(`/?game=${e.target.dataset.value}`)}>League of Legends</p>
            <p data-value="valorant" onClick={(e) => navigate(`/?game=${e.target.dataset.value}`)}>Valorant</p>
         </div>
    )
}

export default Nav