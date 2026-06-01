import { useEffect, useState } from "react";
import { testCall } from "../services/api";


function RecentGameCard(){
const [gamesList, setGamesList]=useState([])

useEffect(() => {
    testCall().then(data => setGamesList(data));
      }, []);
return(
    <div>
        {gamesList.length > 0 ? <div className="RecentGameCardContainer">
        <div className="RecentGameCardContainerHeader">
            <div style={{width:"50%"}}><p>{gamesList[0].videogame_title.name}</p></div>
            <div style={{width:"50%"}}><p className="pTest">{gamesList[0].name}</p></div>
        </div>
        
        </div> : "loading..."}
   </div>




)
}

export default RecentGameCard