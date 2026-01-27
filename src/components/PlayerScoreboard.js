import herosData from "../services/heros.json"
import itemsData from "../services/items.json"
import itemIds from "../services/itemsIDs.json"

// ALT METHOD
// past this in return if using

/* <div className="playerCard">
            <p className="playerLevel">{player.level}</p>
            <img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[player.hero_id].img}`} alt=""/>
            <div className="playerName">
                <p>{player.personaname ? player.personaname : "Anonymous"}</p>
            </div>
            <div className="playerItems">
            {player.item_0 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_0]].img}`} alt=""/> : null}
            {player.item_1 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_1]].img}`} alt=""/> : null}
            {player.item_2 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_2]].img}`} alt=""/> : null}
            {player.item_3 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_3]].img}`} alt=""/> : null}
            {player.item_4 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_4]].img}`} alt=""/> : null}
            {player.item_5 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_5]].img}`} alt=""/> : null}
            </div>
            <div className="playerStats">
                <p>{player.kills} / {player.deaths} / {player.assists}</p>
                <img style={{width:"17px",height:"17px"}} src="https://www.creativefabrica.com/wp-content/uploads/2022/12/16/Sword-icon-Retro-attack-weapon-War-bla-Graphics-52719675-1-1-580x387.png" alt=""/>
                <p>{player.hero_damage}</p>
                <img style={{width:"17px",height:"17px"}} src="https://spng.pngfind.com/pngs/s/8-87666_money-bag-free-vector-icon-designed-by-gregor.png" alt=""/>
                <p>{player.total_gold}</p>
            </div>
        </div> */

function PlayerScoreboard({team, data}){
    console.log(data)
    console.log(team)

   const mappedPlayers = data.map((player,index)=>{
                if(player.isRadiant === team){
                return (
                <tr>
                    <td className="playerLevel">{player.level}</td>
                    <td className="playerName"><img style={{width:"100px"}} src={`https://cdn.cloudflare.steamstatic.com${herosData[player.hero_id].img}`} alt=""/><div className="textOverflow">{player.name !== null ? player.name : player.name === null ? player.personaname : "Anonymous"}</div></td>
                    <td>{player.kills}</td>
                    <td>{player.deaths}</td>
                    <td>{player.assists}</td>
                    <td className="playerItems">
                         {player.item_0 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_0]].img}`} alt=""/> : null}
                         {player.item_1 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_1]].img}`} alt=""/> : null}
                         {player.item_2 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_2]].img}`} alt=""/> : null}
                         {player.item_3 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_3]].img}`} alt=""/> : null}
                         {player.item_4 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_4]].img}`} alt=""/> : null}
                         {player.item_5 > 0 ? <img src={`https://cdn.cloudflare.steamstatic.com${itemsData[itemIds[player.item_5]].img}`} alt=""/> : null}
                    </td>
                    <td>{player.last_hits} / {player.denies}</td>
                    <td>{player.gold_per_min} / {player.xp_per_min}</td>
                    <td>{player.total_gold}</td>
                    <td>{player.hero_damage}</td>
                    <td>{player.tower_damage}</td>
                    <td>{player.hero_healing}</td>
                </tr>
        )
                }else{
                 return null
                }
    })
    return(
        <>
        {mappedPlayers}
        </>
    )
}

export default PlayerScoreboard