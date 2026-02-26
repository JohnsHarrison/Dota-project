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
            <div>
            <div className="playerHeader">
                <div>
                    <img alt="Profile" src={playerData.dataOne.profile.avatarfull}/>
                    <p>{playerData.dataOne.profile.personaname}</p>
                </div>
                
                <div>
                    <p>WINS {playerData.dataThree.win}</p>
                    <p>LOSS {playerData.dataThree.lose}</p>
                    <p>WIN RATE {((playerData.dataThree.win / (playerData.dataThree.lose + playerData.dataThree.win)) * 100).toFixed(2)}%</p>
                </div>

                <div>
                    <p>career totals</p>
                    <div style={{display:"flex"}}>
                       <p>Kills {playerData.dataTwo[0].sum}</p>
                       <p>Deaths {playerData.dataTwo[1].sum}</p> 
                       <p>Assists {playerData.dataTwo[2].sum}</p> 
                       <p>K/D {(playerData.dataTwo[0].sum / playerData.dataTwo[1].sum).toFixed(2)}</p> 
                    </div>
                    <div style={{display:"flex"}}>
                       <p>Tower Kills {shortenNumber(playerData.dataTwo[15].sum)}</p>
                       <p>Neutral Kills {shortenNumber(playerData.dataTwo[16].sum)}</p> 
                       <p>Courier Kills {shortenNumber(playerData.dataTwo[17].sum)}</p> 
                       <p>Last Hits{shortenNumber(playerData.dataTwo[6].sum)}</p> 
                    </div>
                    <div style={{display:"flex"}}>
                       <p>Hero Damage {shortenNumber(playerData.dataTwo[11].sum)}</p>
                       <p>Tower Damage {shortenNumber(playerData.dataTwo[12].sum)}</p> 
                       <p>Hero Healing {shortenNumber(playerData.dataTwo[13].sum)}</p> 
                       <p>Denies {shortenNumber(playerData.dataTwo[7].sum)}</p> 
                    </div> 
                </div>
              </div>

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
            
            
        }


        </div>
    
    )
}

export default PlayerProfile