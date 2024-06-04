import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import EditorCode from "./EditorCode";
import StepButton from './StepButton';

export default function ReactPage() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/main');
    }, 500); 
  };

  const imperative = `
  const element = document.createElement('div');
  element.textContent = 'Hello, World!';
  document.body.appendChild(element);
  `;

  const declarative = `
  const App = () => {
    return (
      <div>
        Hello, World!
      </div>
    );
  }  
  `;

  const prop = `
  const Greeting = (props) => {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  const App = () => {
    return <Greeting name="World" />;
  }
  
  `;


    return (
      <div className={`reactPageContainer ${isAnimating ? 'fading' : ''}`}>
        <div className='reactPageIntro'>

          <h1>React</h1>
          <hr />
          <span className='reactPageIntroFirstSpan'>React to biblioteka JavaScript do budowania interfejsów użytkownika, stworzona przez Facebooka w 2013 roku. Jest używana głównie do tworzenia single page applications, 
            gdzie treści są dynamicznie ładowane i aktualizowane bez konieczności odświeżania całej strony. React skupia się na komponentach, co umożliwia tworzenie złożonych i interaktywnych interfejsów użytkownika z mniejszych, wielokrotnego użytku bloków kodu.
          </span>
        </div>

        <div className='reactPageReasons'>
          <h1>Dlaczego React?</h1>
          <hr/>
          <span className='reactPageIntroSecondSpan'>
            React jest wybierany z wielu powodów:
          </span>

            <span className='reactPageReasonCount'><b>1</b> Komponentowość: Pozwala tworzyć wielokrotnego użytku komponenty, które mogą być łatwo łączone, aby tworzyć złożone aplikacje.</span>
            <span className='reactPageReasonCount'><b>2</b> Virtual DOM: React używa wirtualnego DOM (Document Object Model), który poprawia wydajność aplikacji poprzez minimalizację bezpośrednich manipulacji rzeczywistym DOM.</span>
            <span className='reactPageReasonCount'><b>3</b> Społeczność i Ekosystem: React ma dużą społeczność oraz wsparcie, co oznacza dostępność wielu narzędzi, bibliotek i zasobów.</span>
            <span className='reactPageReasonCount'><b>4</b> JSX: React używa JSX, czyli rozszerzenia składni JavaScript, które pozwala pisać kod HTML w JavaScript, co ułatwia tworzenie komponentów.</span>
            <span className='reactPageReasonCount'><b>5</b> Deklaratywność: React pozwala opisywać interfejs użytkownika w sposób deklaratywny, co ułatwia zrozumienie i utrzymanie kodu.</span>
          
            <span className='reactPageTypeTitle'>
              Imperatywność | Deklaratywność
            </span>

            <div className='reactPageEditorImpAndDec'>
              <EditorCode string={imperative}/>
              <EditorCode string={declarative}/>
            </div>

            <span className='reactPageImperative'>
              Imperatywność: Styl programowania, który polega na dokładnym opisywaniu krok po kroku, jak coś ma być zrobione. 
              Przykładem może być klasyczne manipulowanie DOM za pomocą czystego JavaScript'u
            </span>

            <span className='reactPageDeclartive'>
              Deklaratywność: Styl programowania, który skupia się na opisywaniu, co ma być zrobione, a nie jak. 
              React jest przykładem deklaratywnego podejścia
            </span>

          </div>
          

        <div className='reactPageComponents'>
          <h1>Komponenty</h1>
          <hr />
          <span className='reactPageUITitle'>
          Zarządzanie UI
          </span>

          <span className='reactPageUIDescription'>
          W React zarządzanie interfejsem użytkownika odbywa się za pomocą komponentów. 
          Każdy komponent może zarządzać swoim własnym stanem i renderować różne elementy w zależności od tego stanu. 
          React automatycznie aktualizuje interfejs użytkownika, gdy stan komponentów się zmienia. 
          Można też używać narzędzi takich jak Redux lub Context API do zarządzania stanem na poziomie całej aplikacji
          </span>

          <span className='reactPageSendingInfo'>
          Przesyłanie danych
          </span>

          <span className='reactPageSendingInfoDescription'>
          Komponenty to podstawowe elementy w React, które mogą być klasowe lub funkcyjne. 
          Każdy komponent może posiadać własny stan i cykl życia. 
          Dane mogą być przesyłane między komponentami za pomocą propsów.
          </span>

          <div className='reactPageUIEditor'>
            <EditorCode string={prop} />
          </div>

          
        </div>

        <div className='reactPageJSX'>
          <h1>JSX</h1>
          <hr />
          <span className='reactPageJSXDescription'>
          JSX (JavaScript XML) to składnia pozwalająca na pisanie HTML w ramach JavaScript. JSX upraszcza tworzenie komponentów React, umożliwiając łączenie logiki z markowaniem HTML w bardziej przejrzysty sposób. 
          JSX jest następnie transpilowany do wywołań funkcji React.createElement.
          </span>
        </div>
        <StepButton handleClick={handleNavigate}/>
      </div>
    );
  }
  
 
  