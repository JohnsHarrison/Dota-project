import { useState, useEffect } from "react";
import {getPlayerRecentMatch} from "../services/api"
import heroesData from "../services/heroes.json"
import lobby_types from "../services/lobby_types.json"

function RecentMatch(id){
const [matches,setMatches] = useState()
const [count, setCount] = useState(20)

useEffect(() => {
    const fetchData = async () => {
         
            const apiCallOne  = await (getPlayerRecentMatch(id.id,count));

            setMatches(apiCallOne)   
       
        };
        
        // console.log(id.id)
        
    
        fetchData();
        // console.log(matches)

      }, [id, count]); 


return(

    <div className="recentMatchContainer">
        {matches === null || matches === undefined || matches.length === 0 ? null : 
        <div>
            
        
    {matches.map((match,index)=>{
        return(
            <div key={index}>
            <div className="recentMatchBanner">
                <p>{(new Date(match.start_time * 1000)).toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/New_York', timeZoneName: 'short'})}</p>
                <p>{lobby_types[match.lobby_type].name}</p>
                <p>{match.match_id}</p>
            </div>
            <div className="recentMatchData">
                <img src={`https://cdn.cloudflare.steamstatic.com${heroesData[match.hero_id].img}`} alt=""/>
                <div style={{textAlign:"left",width:"210px"}}>
                   <p>{heroesData[match.hero_id].localized_name}</p>
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
        </div>
        )
      })}
      <button onClick={()=>{setCount(count + 10)}}>Show More</button>
      </div>

      }
    
        
    
    </div>
)

}

export default RecentMatch