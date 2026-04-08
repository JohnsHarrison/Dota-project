import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import PlayerProfile from './pages/PlayerProfile';
import RecentMatch from './components/RecentMatch';
import SearchedMatch from "./pages/SearchedMatch"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/match/:id' element={<SearchedMatch/>}/>
        <Route path='/playerprofile/:id' element={<PlayerProfile/>}/>
        <Route path='/recentmatches' element={<RecentMatch/>}/>
     </Routes>
    </div>
  );
}

export default App;
