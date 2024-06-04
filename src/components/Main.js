import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Roadmap from './Roadmap';
import Metodyka from './Metodyka';
import Analiza from './Analiza';
import ReactPage from './ReactPage';
import Styling from './Styling';
import Hooks from './Hooks';
import Redux from './Redux';
import Routing from './Routing';
import Axios from './Axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Animation.css';


export default function Main() {
  const [currentComponent, setCurrentComponent] = useState('roadmap');

  return (
    <div className='mainContainer'>
      <nav className='mainNavbar'>
        <button 
          className={`mainButton ${currentComponent === 'roadmap' ? 'active' : ''}`} 
          onClick={() => setCurrentComponent('roadmap')}
        >
          Roadmap
        </button>
        <button 
          className={`mainButton ${currentComponent === 'metodyka' ? 'active' : ''}`} 
          onClick={() => setCurrentComponent('metodyka')}
        >
          Metodyka
        </button>
        <button 
          className={`mainButton ${currentComponent === 'analiza' ? 'active' : ''}`} 
          onClick={() => setCurrentComponent('analiza')}
        >
          Analiza
        </button>
      </nav>
      <TransitionGroup>
        {currentComponent === 'roadmap' && (
          <CSSTransition timeout={500} classNames="fade">
            <Roadmap />
          </CSSTransition>
        )}
        {currentComponent === 'metodyka' && (
          <CSSTransition timeout={500} classNames="fade">
            <Metodyka />
          </CSSTransition>
        )}
        {currentComponent === 'analiza' && (
          <CSSTransition timeout={500} classNames="fade">
            <Analiza />
          </CSSTransition>
        )}
      </TransitionGroup>
      <Routes>
        <Route path="react" element={<ReactPage />} />
        <Route path="styling" element={<Styling />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="redux" element={<Redux />} />
        <Route path="routing" element={<Routing />} />
        <Route path="axios" element={<Axios />} />
      </Routes>
    </div>
  );
}


