import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Test from './pages/Test';
import PlayerProfile from './pages/PlayerProfile';
import RecentMatch from './components/RecentMatch';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/playerprofile/:id' element={<PlayerProfile/>}/>
        <Route path='/recentmatches' element={<RecentMatch/>}/>
     </Routes>
    </div>
  );
}

export default App;
