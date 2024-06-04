import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Main from './components/Main';
import ReactPage from './components/ReactPage';
import Styling from './components/Styling';
import Hooks from './components/Hooks';
import Redux from './components/Redux';
import Routing from './components/Routing';
import Axios from './components/Axios';
import './React.css';
import './Styling.css';
import './Hooks.css';
import './Redux.css';
import './Metodyka.css';

export default function App() {

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 100); 
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    if (loading) {
      return(
        <h1 className='loading'>Ładowanie...</h1>
      );
    }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/styling" element={<Styling />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/routing" element={<Routing />} />
        <Route path="/axios" element={<Axios />} />
      </Routes>
    </Router>
  );
}

