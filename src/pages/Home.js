import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getVideogames, getGosuGamerNews, getCompGames, testAPI } from "../services/api";
import RecentGameCard from "../components/RecentGameCard";
import News from "../components/News";


function Home({selectedGame}) {
// const [game, setGame] = useState("")
const [stream, setStream] = useState("")
const [gamesList, setGamesList]=useState([])
const [darkMode, setDarkMode] = useState("&darkpopout")
const [id,setID] = useState('')
const scrollTrackRef = useRef(null)
const posRef = useRef(0)
const animRef = useRef(null)
const pausedRef = useRef(false)

const channels = [
  { name: "dota2", value: "esl_dota2", display:"Dota 2"},
  { name: "sc2", value: "esl_sc2", display:"StarCraft 2"},
  { name: "counterstrike", value: "eslcs", display:"Counter Strike 2"},
  { name: "lol", value: "riotgames", display:"League of Legends"},
  { name: "valorant", value: "riotgamesoce", display:"Valorant"},
]



    useEffect(() => {
        testAPI()
       getCompGames().then(data => setGamesList(data))
        if(selectedGame==="home"){
       let num = Math.floor(Math.random() * 5)
       setStream(channels[num])
    }else{
        const channel = channels.find(c => c.name === selectedGame)
        if (channel) setStream(channel)
    }
    
  }, [selectedGame]);

  useEffect(() => {
    const track = scrollTrackRef.current
    if (!track || !gamesList.length) return
    posRef.current = 0

    function animate() {
      if (!pausedRef.current) {
        posRef.current += 0.5
        const halfWidth = track.scrollWidth / 2
        if (posRef.current >= halfWidth) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [gamesList])

    return (
        <div >
            {
                selectedGame === "home" ? <div><p>Current Live ESports</p>
        <p>now watching {stream.display}</p></div> : null
            }
        <div className="embeddedVideo">
        <iframe
        title="ESL"
    src={`https://player.twitch.tv/?channel=${stream.value}&parent=localhost&autoplay=true&muted=false&time=0s`}
    height="450px"
    width="800px"
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
        title="steam chat" 
        src={`https://www.twitch.tv/embed/${stream.value}/chat?parent=localhost${darkMode}`}
        height="450px"
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
             <button onClick={()=>{setStream("dashducks")}}>
                TEST
            </button>
        </div>

        <News game={selectedGame}/>
        

        {/* <div>
            <p>testing with normal match ID 8598265551</p>
            <p>testing with tournament match ID 8451467455</p>
            <h3>Enter Match ID</h3>
            <input style={{width:"10%"}} type="text" value={id} onChange ={ e =>{
               let input = e.target.value
               setID(input)}} placeholder="Match ID"/>
        
            <Link style={{textDecoration:"none", color:"inherit"}} to={`/match/${id}`}><button style={{width:"10%"}}>Search Match</button></Link>
        </div> */}
     
        </div>
    )
}

export default Home