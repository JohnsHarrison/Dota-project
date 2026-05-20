import { useState, useEffect } from "react";
import {getHeroesMatchups} from "../services/api"
import heroesData from "../services/heroes.json"
import { Link } from "react-router-dom";

function HeroMatchups(id){
const [matches,setMatches] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {

            const apiCallOne  = await (getHeroesMatchups(id.id));

            const sorted = [...apiCallOne].sort((a, b) => (b.wins / b.games_played) - (a.wins / a.games_played))
            setMatches(sorted)
            setIsLoading(false)

        };

        fetchData();
      }, [id.id]);


return(

    <div>
    {isLoading ? <img src="https://i.makeagif.com/media/6-30-2015/ZorDaa.gif" alt="loading"/> : null}
    {!isLoading && matches.map((match,key)=>{
        return<div>
            <Link to={`/herodetails/${match.hero_id}`}><img src={`https://cdn.cloudflare.steamstatic.com${heroesData[match.hero_id].img}`} alt=""/></Link>
            <h4>{heroesData[match.hero_id].localized_name}</h4>
            <p>games played: {match.games_played}</p>
            <p>Wins: {match.wins}</p>
            <p>Losses: {match.games_played - match.wins}</p>
            <p>Winrate: {((match.wins / match.games_played) * 100).toFixed(2)}</p>
        </div>
    })} 
    </div>
)

}

export default HeroMatchups