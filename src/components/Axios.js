import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import EditorCode from "./EditorCode";
import StepButton from './StepButton';

export default function Axios() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/main');
    }, 500); 
  };


const get = `
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

`;

const post = `
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body,
      userId: 1
    })
    .then(response => {
      setResponse(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

`;

const inter = `
import axios from 'axios';

// Interceptor żądań
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
}, error => {
  return Promise.reject(error);
});

// Interceptor odpowiedzi
axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  return Promise.reject(error);
});

`;

const cancel = `
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const source = axios.CancelToken.source();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      cancelToken: source.token
    })
    .then(response => {
      setData(response.data);
    })
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      } else {
        setError(thrown);
      }
    });

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

`;




    return (
      <div className={`reactPageContainer ${isAnimating ? 'fading' : ''}`}>
        <div className='reactReduxContainer'>
        <h1 className='Title'>Axios</h1>
        <hr />
        <span className='reactReduxDescription'>
        Axios to popularna biblioteka do wykonywania żądań HTTP, która działa zarówno w przeglądarce, jak i w Node.js. 
        Jest często używana w aplikacjach React do komunikacji z backendem, ponieważ oferuje łatwy w użyciu interfejs i wiele funkcji takich jak interceptory, 
        anulowanie żądań, automatyczne parsowanie JSON, i obsługa czasu oczekiwania.
        </span>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>GET</h1>
          <span className='reactReduxDescription'>
          Najprostszym sposobem na użycie Axios jest wysłanie żądania GET do określonego URL i obsługa odpowiedzi.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={get}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>POST</h1>
          <span className='reactReduxDescription'>
          Możesz również wysyłać dane do serwera za pomocą żądania POST.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={post}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Interceptory</h1>
          <span className='reactReduxDescription'>
          Interceptory pozwalają przechwytywać żądania i odpowiedzi przed ich obsłużeniem.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={inter}/>
          </div>
        </div>

        <div className='reactReduxContainer'>
          <h1 className='reactHooksTitle'>Anulowanie żądań</h1>
          <span className='reactReduxDescription'>
          Axios wspiera anulowanie żądań za pomocą CancelToken.
          </span>
          <div className='reackHooksEditor'>
          <EditorCode string={cancel}/>
          </div>
          <span className='reactReduxDescription'>
          Axios jest potężnym narzędziem do wykonywania żądań HTTP w aplikacjach React. 
          Umożliwia łatwe wysyłanie żądań GET i POST, konfigurację globalną, używanie interceptorów do przechwytywania żądań i odpowiedzi, 
          anulowanie żądań oraz obsługę błędów. Integracja z Reactem jest prosta, a dzięki możliwości używania hooków, takich jak useEffect, 
          można efektywnie zarządzać cyklem życia żądań HTTP.
          </span>
        </div>

        
        <StepButton handleClick={handleNavigate}/>
      </div>
    );
  }
  

  