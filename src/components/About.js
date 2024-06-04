import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Animation.css'; 
import '../About.css'; 

export default function About() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/main');
    }, 500); 
  };

  return (
    <div className={`about-container ${isAnimating ? 'fade-out' : ''}`}>
      <div className='aboutHolder'>
        <h1>Opis projektu</h1>
        <span>Jest to projekt stworzony na zaliczenie przedmiotu 
          "Interfejs w aplikacjach internetowych", zawierający roadmapę tematów, metodykę tworzenia stron poznanych na PICK
          oraz analizę bezpieczeństwa.</span> 
          <br />
        <button onClick={handleNavigate}>Wejdź na stronę</button>
      </div>
    </div>
  );
}
