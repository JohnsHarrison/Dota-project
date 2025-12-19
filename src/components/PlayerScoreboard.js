import herosData from "../services/heros.json"
import itemsData from "../services/items.json"
import itemIds from "../services/itemsIDs.json"

function PlayerScoreboard({data}){
    console.log(data)

   const mappedPlayers = data.map((player,index)=>{
     console.log(`player ${index} item number for slot 1 = ${player.item_0}`)
     console.log(`player ${index} item number for slot 1 = ${player.item_1}`)
     console.log(`player ${index} item number for slot 1 = ${player.item_2}`)
     console.log(`player ${index} item number for slot 1 = ${player.item_3}`)
     console.log(`player ${index} item number for slot 1 = ${player.item_4}`)
     console.log(`player ${index} item number for slot 1 = ${player.item_5}`)
        return (
            
        <div className="playerCard">
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
        </div>
        )
    })
    return(
    <div>
        {mappedPlayers}
    </div>
    )
}

export default PlayerScoreboard