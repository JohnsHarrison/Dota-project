import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
const [stream, setStream] = useState("")
const [darkMode, setDarkMode] = useState("&darkpopout")
const [id,setID] = useState('')



      useEffect(() => {

       let num = Math.floor(Math.random() * 3)
       if(num === 0){
        setStream("esl_dota2")
       }else if(num === 1){
        setStream("esl_sc2")
       }else{
        setStream("eslcs")
       }
       console.log(num)
  }, []);

    return (
        <div >
            <h3>home page</h3>
        <p>Current Live ESports</p>
        <p>now watching {stream}</p>
        <div className="embeddedVideo">
        <iframe
        title="ESL"
    src={`https://player.twitch.tv/?channel=${stream}&parent=localhost&autoplay=true&muted=false&time=0s`}
    height="600px"
    width="1050px"
    allowFullScreen>
        </iframe>
        <div style={{display:"flex", flexDirection:"column", position:"relative"}}>
            <button className={darkMode === "&darkpopout" ? "darkModeButtonEnabled" : "darkModeButton"} onClick={()=>{
                if(darkMode === "&darkpopout"){
                    setDarkMode("") 
                    
                }else{
                    setDarkMode("&darkpopout")
                }
            }
            }>{darkMode === "&darkpopout" ? "Disable Dark Mode" : "Enable Dark Mode"}</button>
        <iframe
        title="esl chat" 
        src={`https://www.twitch.tv/embed/${stream}/chat?parent=localhost${darkMode}`}
        height="600px"
        width="300px"
        sandbox>
    </iframe>
    </div>
    </div>
        <div>
            <button onClick={()=>{setStream("esl_dota2")}}>
                DOTA 2
            </button>
            <button onClick={()=>{setStream("esl_sc2")}}>
                Star Craft 2
            </button>
            <button onClick={()=>{setStream("eslcs")}}>
                Counter Strike 2
            </button>
             <button onClick={()=>{setStream("iannihilate")}}>
                TEST
            </button>
        </div>

        <div>
            <p>testing with normal match ID 8598265551</p>
            <p>testing with tournament match ID 8451467455</p>
            <h3>Enter Match ID</h3>
            <input style={{width:"10%"}} type="text" value={id} onChange ={ e =>{
               let input = e.target.value
               setID(input)}} placeholder="Match ID"/>
        
            <Link style={{textDecoration:"none", color:"inherit"}} to={`/match/${id}`}><button style={{width:"10%"}}>Search Match</button></Link>
        </div>
     
        </div>
    )
}

export default Home