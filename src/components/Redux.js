import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import EditorCode from "./EditorCode";
import StepButton from './StepButton';

export default function Redux() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/main');
    }, 500); 
  };


const actions = `
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};
`;

const reducer = `
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
`;

const selector = `
import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);

  return <div>{count}</div>;
};

`;

const dispatch = `
import React from 'react';
import { useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

`;




    return (
      <div className={`reactPageContainer ${isAnimating ? 'fading' : ''}`}>
        <div className='reactReduxContainer'>
        <h1 className='Title'>Redux</h1>
        <hr />
        <span className='reactReduxDescription'>
        Redux to kontener stanu dla aplikacji JavaScript, który pomaga zarządzać stanem aplikacji w sposób przewidywalny i skalowalny. 
        Jest szczególnie przydatny w dużych aplikacjach, gdzie zarządzanie stanem może stać się skomplikowane.
        </span>
        <span className='reactReduxIntro'>
        Główne koncepcje Redux:
        </span>
        <span className='reactReduxReasons'><b>1</b>Store: Jednoźródłowe drzewo stanu aplikacji.</span>
        <span className='reactReduxReasons'><b>2</b>Actions: Obiekty, które opisują co się stało.</span>
        <span className='reactReduxReasons'><b>3</b>Reducers: Funkcje, które określają jak stan aplikacji zmienia się w odpowiedzi na akcje.</span>
        <span className='reactReduxReasons'><b>4</b>Dispatch: Funkcja do wysyłania akcji do store.</span>
        <span className='reactReduxReasons'><b>5</b>Provider: Komponent React, który udostępnia store aplikacji.</span>
        <span className='reactReduxReasons'><b>6</b>Hooks (useSelector, useDispatch): Hooki do łączenia komponentów React z Reduxem.</span>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Store</h1>
          <span className='reactReduxDescription'>
          Store jest pojedynczym obiektem, który przechowuje stan aplikacji. 
          Store jest tworzony przy użyciu funkcji createStore.
          </span>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Actions</h1>
          <span className='reactReduxDescription'>
          Actions to obiekty, które opisują co się stało w aplikacji. 
          Każda akcja musi mieć przynajmniej typ (type), który jest zazwyczaj stringiem.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={actions}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Reducers</h1>
          <span className='reactReduxDescription'>
          Reducers to funkcje, które określają jak stan aplikacji zmienia się w odpowiedzi na akcje.
          Reducer przyjmuje dwa argumenty: aktualny stan i akcję, i zwraca nowy stan.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={reducer}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Dispatch</h1>
          <span className='reactReduxDescription'>
          Dispatch to metoda store, która służy do wysyłania akcji do store.
          Wywołanie dispatch powoduje, że wszystkie reducetry są wywoływane z przekazaną akcją.
          </span>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Synchronizacja danych</h1>
          <span className='reactReduxDescription'>
          Redux utrzymuje jednolity stan aplikacji, co ułatwia synchronizację danych między komponentami. 
          Gdy stan się zmienia, odpowiednie komponenty są ponownie renderowane
          </span>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>useSelector | useDispatch</h1>
          <span className='reactReduxDescription'>
          React Redux oferuje hooki do łączenia komponentów z Reduxem. 
          Hook useSelector wybiera dane ze store. Hook useDispatch zwraca funkcję dispatch z Redux store.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={selector}/>
          <EditorCode string={dispatch}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Provider</h1>
          <span className='reactReduxDescription'>
          Provider to komponent, który dostarcza Redux store wszystkim komponentom w aplikacji. 
          Jest to konieczne, aby używać hooków takich jak useSelector i useDispatch.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={selector}/>
          <EditorCode string={dispatch}/>
          </div>
          <span className='reactReduxDescription'>
          Redux zapewnia przewidywalny sposób zarządzania stanem aplikacji poprzez koncepcje takie jak store, actions, reducers i dispatch. 
          Integracja z Reactem za pomocą Provider oraz hooków useSelector i useDispatch pozwala na łatwe łączenie stanu aplikacji z komponentami Reacta, zapewniając skalowalność i prostotę w zarządzaniu stanem w dużych aplikacjach.
          </span>
        </div>

        <StepButton handleClick={handleNavigate}/>
      </div>
    );
  }
  

  