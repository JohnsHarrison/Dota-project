import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import PlayerProfile from './pages/PlayerProfile';
import RecentMatch from './components/RecentMatch';
import SearchedMatch from "./pages/SearchedMatch"
import HeroDetails from './pages/HeroDetails';
import RecentGameCard from "./components/RecentGameCard"
import { useEffect, useState, useRef } from "react";
import { getCompGames } from './services/api';




function App() {

const [gamesList, setGamesList] = useState([])
const [selectedGame, setSelectedGame] = useState("home")

const scrollTrackRef = useRef(null)
const posRef = useRef(0)
const animRef = useRef(null)
const pausedRef = useRef(false)

  useEffect(() => {
    getCompGames().then(data => setGamesList(data))
  }, [])

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
    <div className="App">
      <div className="RecentGamesScrollBar">
                <div
                    className="RecentGamesScrollTrack"
                    ref={scrollTrackRef}
                    onMouseEnter={() => { pausedRef.current = true }}
                    onMouseLeave={() => { pausedRef.current = false }}
                >
                    {gamesList.map((match, i) => <RecentGameCard key={i} match={match}/>)}
                    {gamesList.map((match, i) => <RecentGameCard key={`d${i}`} match={match}/>)}
                </div>
            </div>
      <Nav setSelectedGame = {setSelectedGame}/>
      <Routes>
        <Route path='/' element={<Home selectedGame={selectedGame}/>}/>
        <Route path='/match/:id' element={<SearchedMatch/>}/>
        <Route path='/playerprofile/:id' element={<PlayerProfile/>}/>
        <Route path='/recentmatches' element={<RecentMatch/>}/>
        <Route path='/herodetails/:id' element={<HeroDetails/>}/>
        <Route path='/test' element={<RecentGameCard/>}/>
     </Routes>
    </div>
  );
}

export default App;
