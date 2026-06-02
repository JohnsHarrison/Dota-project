import QuestionMark from "../assets/Question Mark.png"

function RecentGameCard({match}){


return(
    <div>
        {match !== null ? <div className="RecentGameCardContainer">
        <div className="RecentGameCardContainerHeader">
            <div style={{width:"50%", textAlign:"left", marginLeft:"15px"}}><p>{match.videogame_title?.name ?? match.videogame?.name}</p></div>
            <div style={{width:"50%"}}><p>{match.name}</p></div>
        </div>
        <div className="RecentGameCardContainerHeader" style={{borderBottom:"1px solid black"}}>
            <div style={{width:"50%", textAlign:"left", marginLeft:"15px"}}><p>{match.serie?.begin_at ? new Date(match.serie.begin_at).toLocaleDateString('en-US') : ""}</p></div>
            <div style={{width:"50%"}}><p>{match.status?.toUpperCase()}</p></div>
        </div>
        <div className="RecentGameCardContainerRow" style={{background: match.winner?.name === match.opponents[0]?.opponent?.name ? "#02d502" : null,borderBottom:"1px solid black"}}>
            <img src={match.opponents[0]?.opponent?.image_url ?? QuestionMark} alt=""/>
            <div style={{width:"40%"}}><p style={{fontSize:"6cqi"}}>{match.opponents[0]?.opponent?.name}</p></div>
            <div style={{width:"25%"}}><p style={{fontSize:"8cqi"}}>{match.results[0]?.score}</p></div>
        </div>
        <div className="RecentGameCardContainerRow" style={{background: match.winner?.name === match.opponents[1]?.opponent?.name ? "#02d502" : null}}>
            <img src={match.opponents[1]?.opponent?.image_url ?? QuestionMark} alt=""/>
            <div style={{width:"40%"}}><p style={{fontSize:"6cqi"}}>{match.opponents[1]?.opponent?.name}</p></div>
            <div style={{width:"25%"}}><p style={{fontSize:"8cqi"}}>{match.results[1]?.score}</p></div>
        </div>    
        </div> : "loading..."}
   </div>




)
}

export default RecentGameCard