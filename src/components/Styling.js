import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import EditorCode from "./EditorCode";
import StepButton from './StepButton';


export default function Styling() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/main');
    }, 500); 
  };

  const sass = `
  $primary-color: #3498db;

.container {
  color: $primary-color;
  .header {
    font-size: 2rem;
  }
}
  `;

  const tailwind = `
  const App = () => {
    return (
      <div className="p-4 bg-blue-500 text-white">
        Hello, Tailwind CSS!
      </div>
    );
  }  
  `;

  const ui = `
  import React from 'react';
  import { Button } from '@mui/material';

  const App = () => {
    return (
      <Button variant="contained" color="primary">
        Hello, Material-UI!
      </Button>
    );
  }

  export default App;
  `;


    return (
      <div className={`reactPageContainer ${isAnimating ? 'fading' : ''}`}>

        <div className='reactStylingContainer'>
          <h1>Styling</h1>
          <hr />
          <span className='reactStylingSpan'>
          Stylowanie w React może być realizowane na wiele różnych sposobów. 
          Można korzystać z tradycyjnych metod takich jak pliki CSS, 
          jak i bardziej zaawansowanych rozwiązań jak SCSS, Tailwind CSS, a także gotowych komponentów z otwartego źródła. 
          Dodatkowo react pozwala na szybkie dodawanie className do elementów strony.
          </span>

          <div id='style2' className='reactStylingContainer'>
            <h1>Scss i Tailwind</h1>
            <hr />
            <span className='reactStylingTitle'>SCSS</span>
            <span className='reactStylingSpan'>
            SCSS (Sassy CSS) to rozszerzenie CSS, które wprowadza funkcjonalności takie jak zmienne, 
            zagnieżdżanie, dziedziczenie i funkcje. SCSS może być używany w projektach React dzięki narzędziom takim jak node-sass lub sass
            </span>
            <div className='reactStylingEditor'>
              <EditorCode string={sass}/>
            </div>
          </div>

          <div className='reactStylingContainer'>
            <span className='reactStylingTitle'>TAILWIND</span>
            <span className='reactStylingSpan'>
            Tailwind CSS to framework do stylowania, który oferuje gotowe klasy pomocnicze, 
            pozwalające na szybkie tworzenie nowoczesnych interfejsów bez konieczności pisania niestandardowego CSS. 
            Tailwind jest bardzo popularny dzięki swojej elastyczności i możliwości dostosowania do potrzeb projektu.
            </span>
            <div className='reactStylingEditor'>
              <EditorCode string={tailwind}/>
            </div>
          </div>

          <div className='reactStylingOpenSource'>
            <h1>Open source</h1>
            <hr />
            <span className='reactStylingSpan'>
            Istnieje wiele gotowych komponentów open source, które można wykorzystać w projektach React. 
            Komponenty te często są stylowane i zawierają różne funkcjonalności. 
            React oferuje szeroki ekosystem bibliotek i komponentów open source, 
            które można wykorzystać do przyspieszenia procesu tworzenia aplikacji. 
            Jedną z przykładowych bibliotek komponentów jest Material-UI inspirowana zasadami Material Design od Google. 
            Oferuje szeroki wybór gotowych, responsywnych komponentów, które można łatwo dostosować do własnych potrzeb. 
            Natomiast przykładową biblioteką do animacji, która jest także wykorzystywana w niektórych miejscach w tej aplikacji to React Transition Group.
            </span>
            <div className='reactStylingEditor'>
              <EditorCode string={ui}/>
            </div>
          </div>

        </div>
        
        <StepButton handleClick={handleNavigate}/>
      </div>
    );
  }
  
 
  