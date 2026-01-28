import herosData from "../services/heros.json"

function PicksBans({data}){
    // console.log(data[1])

    // FIX THIS NOT WORKING WITH TOURNAMENT GAMES   
    // SET CONDITIONAL FOR WHICH TEAM PICKED / BANNED LIKE AN ARROW
    
    const mappedList = data.map((data, index)=>{
    return(
            <div style={{position:"relative"}}>
            <img style={{filter: data.is_pick !== true ? "grayscale(100%)" : null}} className="containerTest" src={`https://cdn.cloudflare.steamstatic.com${herosData[data.hero_id].img}`} alt="" />
            <div className={ data.is_pick !== true ? "containerBanTest" : null} />
            <div className={data.team === 0 ? "pickBanRadiant" : "pickBanDire"}/>
        </div>
        )
    }) 

    return(
        <>
        {mappedList}
        </>
    )
}

export default PicksBans