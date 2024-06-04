import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import EditorCode from "./EditorCode";
import StepButton from './StepButton';

export default  function Hooks() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/main');
    }, 500); 
  };

  const state = `
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  `;

  const effect = `
  import React, { useState, useEffect } from 'react';

  function Example() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = "You clicked {count} times";
  
      return () => {
        // Cleanup code if needed
      };
    }, [count]); // Effect runs only if count changes
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  `;


  const context = `
  import React, { useContext } from 'react';

  const MyContext = React.createContext();
  
  function Example() {
    const value = useContext(MyContext);
  
    return <div>{value}</div>;
  }
  
  function App() {
    return (
      <MyContext.Provider value="Hello, World!">
        <Example />
      </MyContext.Provider>
    );
  }  
  `;

  const reducer = `
  import React, { useReducer } from 'react';

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    );
  }
  `;





    return (
      <div className={`reactPageContainer ${isAnimating ? 'fading' : ''}`}>
        <div className='reactHooksContainer'>
        <h1 className='Title'>Hooks</h1>
        <hr />
        <span className='reactHooksDescription'>
        Hooki w React to funkcje, które umożliwiają korzystanie ze stanu i innych funkcji Reacta bez potrzeby pisania klas. 
        Hooki zrewolucjonizowały sposób, w jaki tworzymy komponenty.
        </span>
        </div>

        <div className='reactHooksContainer'>
          <h1 className='reactHooksTitle'>useState</h1>
          <span className='reactHooksDescription'>
          Hook useState umożliwia dodanie stanu do komponentu funkcyjnego. 
          Zwraca tablicę z dwoma elementami: aktualnym stanem i funkcją, która pozwala ten stan aktualizować.
          </span>
          <div className='reactHooksEditor'>
            <EditorCode string={state}/>
          </div>
        </div>

        <div className='reactHooksContainer'>
          <h1 className='reactHooksTitle'>useEffect</h1>
          <span className='reactHooksDescription'>
          Hook useEffect zarządza efektami ubocznymi w komponentach funkcyjnych, takimi jak pobieranie danych, subskrypcje czy manipulacje DOM. 
          Może działać po każdym renderowaniu komponentu lub tylko wtedy, gdy pewne wartości się zmieniają.
          </span>
          <div className='reactHooksEditor'>
            <EditorCode string={effect}/>
          </div>
        </div>

        <div className='reactHooksContainer'>
          <h1 className='reactHooksTitle'>useContext</h1>
          <span className='reactHooksDescription'>
          Hook useContext pozwala na korzystanie z kontekstu Reacta, co umożliwia przekazywanie 
          danych przez drzewo komponentów bez konieczności ręcznego przekazywania propsów na każdym poziomie.
          </span>
          <div className='reactHooksEditor'>
            <EditorCode string={context}/>
          </div>
        </div>

        <div className='reactHooksContainer'>
          <h1 className='reactHooksTitle'>useReducer</h1>
          <span className='reactHooksDescription'>
          Hook useReducer jest alternatywą dla useState, bardziej odpowiednią do zarządzania złożonym stanem. 
          Pozwala na definiowanie funkcji redukującej (reducer), która zarządza logiką aktualizacji stanu.
          </span>
          <div className='reactHooksEditor'>
            <EditorCode string={reducer}/>
          </div>
          <span className='reactHooksDescription'>
          Hooki te stanowią podstawę współczesnego programowania w React, pozwalając na tworzenie 
          bardziej złożonych i dynamicznych aplikacji bez potrzeby użycia komponentów klasowych.
          </span>
        </div>

        <StepButton handleClick={handleNavigate}/>
      </div>
    );
  }
  
