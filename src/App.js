import { useState } from 'react';
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { appContext } from './appContext';

function App() {
  const [state, setState] = useState(20);
  const navigate = useNavigate();

  return (
          <appContext.Provider value={{data:state}}>
    <div className='App'>
        <nav>
          <button onClick={() => navigate('/about')}>About me</button>
          <button onClick={() => navigate('/profile')}>Profile</button>


          <Link to='/about'>About Page</Link>
          <Link to='/profile'>Profile Page</Link>
        </nav>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </div>
          </appContext.Provider>
  );
}

export default App;
