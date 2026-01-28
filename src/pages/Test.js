import { useState } from "react"
import { getMatch } from "../services/api.js"
import PlayerScoreboard from "../components/PlayerScoreboard.js"
import herosData from '../services/heros.json'
import Dire_icon from "../assets/Dire_icon.webp"
import Radiant_icon from "../assets/Radiant_icon.webp"
import lobby_types from "../services/lobby_types.json"
import PicksBans from "../components/PicksBans.js"

function Test(){
const [matchData, setMatchData] = useState([])
const [id,setID] = useState('')


async function handleClick(id){
    try{
    setMatchData(await getMatch(id))
    
// console.log(matchData)
}catch (error) {
    console.log(error.message)
    setMatchData(`${error.message}. Please check your Match ID and try again.`)
}}

// TO DO
// generate hero portrates and score like they would appear in a dota game
// for player cards, have radiant on left and dire on right. Maybe set them up similar to League result screen
// https://api.opendota.com/api 
// https://github.com/odota/dotaconstants/blob/master/build/heroes.json
// possible idea, invoker spell casting game

    return(
        <div>
            <p>testing with normal match ID 8598265551</p>
            <p>testing with tournament match ID 8451467455</p>
            <h3>Enter Match ID</h3>
            <input style={{width:"10%"}} type="text" value={id} onChange ={ e =>{
               let input = e.target.value
               setID(input)}} placeholder="Match ID"/>
        
            <button style={{width:"10%"}} onClick={()=>{
                handleClick(id)
            }}>Search Match</button>

        {matchData.length === 0 ? null :
        typeof matchData === "string" ? (
        <div><p>{matchData}</p></div>) : (
        <div>
            {/* <p>In game time -  {Math.floor(matchData.duration / 60) }:{matchData.duration % 60}  </p> 
            <p>This game ended with a score of Radiant:{matchData.radiant_score} / Dire: {matchData.dire_score} for a {matchData.radiant_win ? "radiant victory." : "Dire Victory"}</p> */}
            <div>
                {/* DISPLAY PLAYERS AND SCORE */}

                                <div style={{display:"flex", width:"70%",flexDirection:"column",margin:"auto"}}>
                    <div style={{display:"flex", justifyContent:"space-between",width:"100%",margin:"0px 0px 50px 0px"}}>
                        <p>  
                          {(new Date(matchData.start_time * 1000)).toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/New_York', timeZoneName: 'short',
})}
                        </p>
                        <p>
                           {lobby_types[matchData.lobby_type].name}
                        </p>
                    </div>
                    <div style={{display:"flex", backgroundImage:`linear-gradient(129deg, #004b00d6, black, #cb0000)`,color: "white",paddingTop:"20px"}}>
                    <div style={{display:"flex",flexDirection:"column",width:"40%"}} >
                        <div style={{}}>
                            {/*team logo */}
                            <img style={{height:"100px"}} src={matchData.radiant_team === undefined ? Radiant_icon : matchData.radiant_team.logo_url !== null ? matchData.radiant_team.logo_url : Radiant_icon} alt=""/>
                            <p>{matchData.radiant_team !== undefined ? matchData.radiant_team.name : "Radiant"}</p>
                            <div>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[0].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[1].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[2].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[3].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[4].hero_id].img}`} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex",width:"20%",justifyContent:"space-evenly",fontSize:"2em"}}>
                        <p style={{margin:"auto 10px"}}>{matchData.radiant_score}</p>
                        <p style={{margin:"auto 10px", alignContent:"center"}}>{Math.floor(matchData.duration / 60) }:{matchData.duration % 60}</p>
                        <p style={{margin:"auto 10px"}}>{matchData.dire_score}</p>
                    </div>
                         
                    <div style={{display:"flex",flexDirection:"column",width:"40%"}} >
                        <div style={{}}>
                            {/*team logo */}
                            <img style={{height:"100px"}} src={matchData.dire_team === undefined ? Dire_icon : matchData.dire_team.logo_url !== null ? matchData.dire_team.logo_url : Dire_icon} alt=""/>
                            <p>{matchData.dire_team !== undefined ? matchData.dire_team.name : "Dire"}</p>
                            <div>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[5].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[6].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[7].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[8].hero_id].img}`} alt=""/>
                                <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[9].hero_id].img}`} alt=""/>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

            {/* PICKS AND BANS */}
            <div style={{display:"flex", height: "100px", alignItems: "center", justifyContent: "center"}}>
                <PicksBans data={matchData.picks_bans}/>
            </div>

            <div style={{display:"flex", justifyContent:"center",flexDirection:"column" }}>
                {/* THIS IS WHERE PLAYERS WILL GO  */}
            <p style={{textAlign:"left", margin:"0", paddingLeft:"10px"}}>RADIANT</p>
            <table className="scoreBoardTable">
                <thead>
                    <tr>
                        <th style={{paddingLeft:"10px", width:"2%"}}>LVL</th>
                        <th style={{width:"15%"}}>PLAYER</th>
                        <th>K</th>
                        <th>D</th>
                        <th>A</th>
                        <th style={{width:"20%"}}>ITEMS</th>
                        <th>LH / DN</th>
                        <th>GPM / XPM</th>
                        <th>NW</th>
                        <th>HD</th>
                        <th>TD</th>
                        <th>HH</th>
                    </tr>
                </thead>
                <PlayerScoreboard team={true} data={matchData.players}/>
            </table>

            <p style={{textAlign:"left", margin:"0", paddingLeft:"10px"}}>DIRE</p>
            <table className="scoreBoardTable">
                <thead>
                    <tr>
                        <th style={{paddingLeft:"10px", width:"2%"}}>LVL</th>
                        <th style={{width:"15%"}}>PLAYER</th>
                        <th>K</th>
                        <th>D</th>
                        <th>A</th>
                        <th style={{width:"20%"}}>ITEMS</th>
                        <th>LH / DN</th>
                        <th>GPM / XPM</th>
                        <th>NW</th>
                        <th>HD</th>
                        <th>TD</th>
                        <th>HH</th>
                    </tr>
                </thead>
                <PlayerScoreboard team={false} data={matchData.players}/>
            </table>
                
            </div>

        </div>
        )
        }
        
        </div>
    )
}

export default Test