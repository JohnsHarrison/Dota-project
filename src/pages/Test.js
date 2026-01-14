import { useState } from "react"
import { getMatch } from "../services/api.js"
import PlayerScoreboard from "../components/PlayerScoreboard.js"
import herosData from '../services/heros.json'

function Test(){
const [matchData, setMatchData] = useState([])
const [id,setID] = useState('')


async function handleClick(id){
    try{
    setMatchData(await getMatch(id))
    
console.log(matchData)
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

console.log(herosData)

    return(
        <div>
            <p>testing with match ID 8598265551</p>
            <h3>Enter Match ID</h3>
            <input type="text" value={id} onChange ={ e =>{
               let input = e.target.value
               setID(input)}} placeholder="Match ID"/>
        
            <button onClick={()=>{
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
                
                <div className="matchScore">
                    <div style={{display:"flex",alignItems:"center"}}><p style={{marginRight:"10px"}}>RADIANT</p>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[0].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[1].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[2].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[3].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[4].hero_id].img}`} alt=""/>
                    </div>
                    <p style={{margin:"auto 10px"}}>{matchData.radiant_score}</p>
                    <p style={{margin:"auto 10px", alignContent:"center"}}>{Math.floor(matchData.duration / 60) }:{matchData.duration % 60}</p>
                    <p style={{margin:"auto 10px"}}>{matchData.dire_score}</p>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[5].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[6].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[7].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[8].hero_id].img}`} alt=""/>
                        <img src={`https://cdn.cloudflare.steamstatic.com${herosData[matchData.players[9].hero_id].img}`} alt=""/>
                        <p style={{marginLeft:"10px"}}>DIRE</p>
                    </div>
                </div>

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