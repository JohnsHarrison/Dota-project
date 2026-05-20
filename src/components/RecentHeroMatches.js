import { useState, useEffect } from "react";
import {getHeroesMatches} from "../services/api"
import heroesData from "../services/heroes.json"
import { Link } from "react-router-dom";

function RecentHeroMatch(id){
const [matches,setMatches] = useState()

useEffect(() => {
    const fetchData = async () => {
         
            const apiCallOne  = await (getHeroesMatches(id.id));

            setMatches(apiCallOne)   
       
        };
        
        console.log(id.id)
        
    
        fetchData();
      }, [id]); 

const wins = matches ? matches.filter(match =>
    (match.radiant_win && match.player_slot < 127) ||
    (!match.radiant_win && match.player_slot > 127)
).length : 0

return(

    <div className="recentMatchContainer">
        {matches === null || matches === undefined || matches.length === 0 ? null : 
        <div>
            
    <p>Recent wins in the last 100 matches: {wins}</p>
    {matches.map((match,index)=>{
        return(
            <div key={index}>
            <Link style={{textDecoration:"none", color:"inherit"}} to={`/match/${match.match_id}`}>  
            <div className="recentMatchBanner">
                <p>{(new Date(match.start_time * 1000)).toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/New_York', timeZoneName: 'short'})}</p>
                <p>League: {match.league_name}</p>
                <p>{match.match_id}</p>
            </div>
            <div className="recentMatchData">
                <img src={`https://cdn.cloudflare.steamstatic.com${heroesData[id.id].img}`} alt=""/>
                <div style={{textAlign:"left",width:"210px"}}>
                   <p>{heroesData[id.id].localized_name}</p>
                    {
                    match.radiant_win && match.player_slot < 127 ? <p style={{color:"green"}}>WIN</p> :
                   !match.radiant_win && match.player_slot > 127 ? <p style={{color:"green"}}>WIN</p> :
                   <p style={{color:"red"}}>LOSE</p>}
                </div>
                <div>
                    <p>Duration</p>
                    <p>{Math.floor(match.duration / 60) }:{match.duration % 60}</p>
                </div>             
                <div>
                    <p>Kills</p>
                    <p>{match.kills}</p>
                </div>
                <div>
                    <p>Deaths</p>
                    <p>{match.deaths}</p>
                </div>

                <div>
                    <p>Assists</p>
                    <p>{match.assists}</p>
                </div>
            </div>
            </Link>  
        </div>
        )
      })}
      </div>

      }
    
        
    
    </div>
)

}

export default RecentHeroMatch