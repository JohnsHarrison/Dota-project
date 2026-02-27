import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Test from './pages/Test';
import PlayerProfile from './pages/PlayerProfile';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/playerprofile/:id' element={<PlayerProfile/>}/>
     </Routes>
    </div>
  );
}

export default App;
