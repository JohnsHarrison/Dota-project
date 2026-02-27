import { getPlayer,getPlayerTotals, getPlayerWinLoss } from "../services/api"
import { useEffect, useState } from "react"


function PlayerProfile(id){
const [playerData, setPlayerData] = useState(null)    
const [progress, setProgress] = useState(0);
const [percentage, setPercentage] = useState(0)
const radius = 15.9155;
const circumference = 2 * Math.PI * radius;
const number = 397119848

const shortenNumber = (num) => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(num);
};

console.log(shortenNumber(900))
console.log(shortenNumber(28580))
console.log(shortenNumber(140082530))

      useEffect(() => {
    const fetchData = async () => {
     
        // Define your API requests
        const apiCallOne = getPlayer(number);
        const apiCallTwo = getPlayerTotals(number);
        const apiCallThree = getPlayerWinLoss(number);

        // Use Promise.all() to run them in parallel
        const [responseOne, responseTwo, responseThree] = await Promise.all([apiCallOne, apiCallTwo, apiCallThree]);

        // Process the data once all calls are complete
        setPlayerData({
          dataOne: responseOne,
          dataTwo: responseTwo,
          dataThree: responseThree
        });
        setPercentage(((responseThree.win / (responseThree.lose + responseThree.win)) * 100).toFixed(2))
        
     
        
        
   
    };

    fetchData();

    setTimeout(() => {
    setProgress(percentage);
  }, 100);
    // console.log(playerData)
  }, [percentage]); 

  const offset = circumference - (progress / 100) * circumference;

    return(
        <div>{playerData === null ? null :
            
            <div className="playerHeader">  
                 <div>    
                     <p style={{margin: "0", fontSize: "32px", fontWeight: "bold"}}>{playerData.dataOne.profile.personaname}</p>             
                    <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div style={{display:"flex"}}>
                        <img alt="Profile" src={playerData.dataOne.profile.avatarfull} style={{marginRight:"20px", borderRadius:"25%"}}/>
                        <div style={{display:"flex", flexDirection:"column", width:"200px", justifyContent:"center"}}>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{margin:"0"}}>WINS {playerData.dataThree.win}</p>
                                <p style={{margin:"0"}}>LOSS {playerData.dataThree.lose}</p>
                            </div>
                            {/* <p>WIN RATE</p> */}
                            <div class="single-chart">
                              <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle-bg"
                                  d="M18 2.0845
                                     a 15.9155 15.9155 0 0 1 0 31.831
                                     a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className="circle"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">{((playerData.dataThree.win / (playerData.dataThree.lose + playerData.dataThree.win)) * 100).toFixed(2)}%</text>
                              </svg>
                            </div>
                        </div>  
                        </div>
                    <table className="careerStats">
                        <caption><strong>Career Stats</strong></caption>
                    <tr>
                        <th>Kills</th>
                        <th>Deaths</th>
                        <th>Assists</th>
                        <th>K/D</th>
                    </tr>
                    <tr>
                        <td>{playerData.dataTwo[0].sum}</td>
                        <td>{playerData.dataTwo[1].sum}</td>
                        <td>{playerData.dataTwo[2].sum}</td>
                        <td>{(playerData.dataTwo[0].sum / playerData.dataTwo[1].sum).toFixed(2)}</td>
                    </tr>
                        <tr>
                        <th>Tower Kills</th>
                        <th>Neutral Kills</th>
                        <th>Courier Kills</th>
                        <th>Last Hits</th>
                    </tr>
                    <tr>
                        <td>{shortenNumber(playerData.dataTwo[15].sum)}</td>
                        <td>{shortenNumber(playerData.dataTwo[16].sum)}</td>
                        <td>{shortenNumber(playerData.dataTwo[17].sum)}</td>
                        <td>{shortenNumber(playerData.dataTwo[6].sum)}</td>
                    </tr>
                    <tr>
                        <th>Hero Damage</th>
                        <th>Tower Damage</th>
                        <th>Hero Healing</th>
                        <th>Denies</th>
                    </tr>
                    <tr>
                        <td>{shortenNumber(playerData.dataTwo[11].sum)}</td>
                        <td>{shortenNumber(playerData.dataTwo[12].sum)}</td>
                        <td>{shortenNumber(playerData.dataTwo[13].sum)}</td>
                        <td>{shortenNumber(playerData.dataTwo[7].sum)}</td>
                    </tr>
                </table>

                    </div>
                </div>
                

                
            </div>

            
            
            }


        </div>
    
    )
}

export default PlayerProfile