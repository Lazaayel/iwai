import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import EditorCode from "./EditorCode";
import StepButton from './StepButton';

export default function Routing() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/main');
    }, 500); 
  };


const browser = `
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Inne komponenty routingu */}
    </Router>
  );
}
`;

const route = `
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
`;

const link = `
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
`;

const params = `
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  
  return <div>User ID: {userId}</div>;
}

`;

const nav = `
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

`;


const location = `
import { useLocation } from 'react-router-dom';

function ShowLocation() {
  const location = useLocation();
  
  return <div>Current URL: {location.pathname}</div>;
}

`;


const dynamic = `
<Route path="/user/:userId" element={<UserProfile />} />
`;


const ins = `
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Routes>
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
`;


    return (
      <div className={`reactPageContainer ${isAnimating ? 'fading' : ''}`}>
        <div className='reactReduxContainer'>
        <h1 className='Title'>Routing</h1>
        <hr />
        <span className='reactReduxDescription'>
        Routing w React jest kluczowym elementem budowy aplikacji jednopage'owych (SPA), gdzie różne widoki są renderowane bez konieczności przeładowania strony. 
        Do tego celu najczęściej używa się biblioteki react-router-dom. Jest to najpopularniejsza biblioteka do obsługi routingu w aplikacjach React. 
        Umożliwia tworzenie dynamicznych, wielostronicowych aplikacji w sposób prosty i elegancki. 
        Oferuje wiele komponentów i hooków do zarządzania trasami.
        </span>
        <span className='reactReduxIntro'>
        Podstawowe komponenty react-router-dom:
        </span>
        <span className='reactReduxReasons'><b>1</b>BrowserRouter</span>
        <span className='reactReduxReasons'><b>2</b>Routes i Route</span>
        <span className='reactReduxReasons'><b>3</b>Link i NavLink</span>
        <span className='reactReduxReasons'><b>4</b>useParams, useNavigate, useLocation</span>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>BrowserRouter</h1>
          <span className='reactReduxDescription'>
          BrowserRouter jest głównym kontenerem routingu, który powinien otaczać całą aplikację lub jej główną część. 
          Używa on API historii przeglądarki do nawigacji.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={browser}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Routes i Route</h1>
          <span className='reactReduxDescription'>
          Routes to komponent, który otacza wszystkie definicje tras. 
          Route definiuje pojedynczą trasę i odpowiadający jej komponent.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={route}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Link i NavLink</h1>
          <span className='reactReduxDescription'>
          Link jest używany do nawigacji pomiędzy trasami bez przeładowania strony. 
          NavLink to rozszerzenie Link, które pozwala na dodawanie aktywnych klas do linków.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={link}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>useParams, useNavigate, useLocation</h1>
          <span className='reactReduxDescription'>
          Hook useParams pozwala na dostęp do parametrów dynamicznych w URL.
          Hook useNavigate umożliwia programatyczną nawigację.
          Hook useLocation zwraca obiekt lokalizacji z aktualnym URL-em, co pozwala na dostęp do ścieżki, wyszukiwania i stanu.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={params}/>
          <EditorCode string={nav}/>
          <EditorCode string={location}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Dynamiczne trasy i zagnieżdżone trasy</h1>
          <span className='reactReduxDescription'>
          Można definiować dynamiczne segmenty w trasach, które są dopasowywane do określonych wzorców URL. 
          Trasy mogą być zagnieżdżone, co umożliwia tworzenie złożonych struktur nawigacyjnych.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={dynamic}/>
          <EditorCode string={ins}/>
          </div>
          <span className='reactReduxDescription'>
          react-router-dom jest potężnym narzędziem do zarządzania routingiem w aplikacjach React, 
          oferując szeroki zakres funkcji i możliwości dostosowywania tras i nawigacji.
          </span>
        </div>
        
        <StepButton handleClick={handleNavigate}/>
      </div>
    );
  }
  

  