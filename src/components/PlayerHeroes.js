import { getPlayerHeroes } from "../services/api"
import { useState, useEffect } from "react"
import heroesData from "../services/heroes.json"

function PlayerHeroes(id){
const [heroes,setHeroes] = useState()
const [count,setCount]= useState(10)

useEffect(()=>{
         
    const fetchData = async () => {
        const apiCallOne  = await (getPlayerHeroes(id.id));  
        setHeroes(apiCallOne)   
     };
        
     fetchData()
    //  console.log(heroes)
    //  console.log(id)    
    },[id])


    return(
        <div className="heroesContainer">
            {heroes === null || heroes === undefined || heroes.length === 0 ? null : 
        <div>
        
    {heroes.map((hero,index)=>{
        if(index <= count){
          return(
            <div className="heroData" key={index}>
                <div style={{width:"100px",marginRight:"10px"}}>
                    <img src={`https://cdn.cloudflare.steamstatic.com${heroesData[hero.hero_id].img}`} alt=""/>
                    <p>{heroesData[hero.hero_id].localized_name}</p>
                </div>
                <div className="winRateContainer">
                    <div className="winRateRow">
                        <p>Games Played <strong>{hero.games}</strong></p>
                        <div class="progress-container">
                            <div class="progress-bar" style={{width:(((hero.win / hero.games) * 100).toFixed(2)).toString()+"%"}}></div>
                        </div>
                    </div>
                    <div className="winRateRow">
                        <p>Games With <strong>{hero.with_games}</strong></p>
                        <div class="progress-container">
                            <div class="progress-bar" style={{width:(((hero.with_win / hero.with_games) * 100).toFixed(2)).toString()+"%"}}></div>
                        </div>
                    </div>
                    <div className="winRateRow">
                        <p>Games Against <strong>{hero.against_games}</strong></p>
                        <div class="progress-container">
                            <div class="progress-bar" style={{width:(((hero.against_win / hero.against_games) * 100).toFixed(2)).toString()+"%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
         )  
        }else{
            return null
        }
           
        
        
      })}
      <button onClick={()=>{setCount(count + 10)}}>Show More</button>
      </div>

      }

        </div>

    )
}

export default PlayerHeroes