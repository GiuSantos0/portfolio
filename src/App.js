import React from 'react';
import './App.css';
import Routes from './routes';

import Loading from './components/Loader';


function App() {
  return (
    <div className="App">
        <header>
          <Loading/>
        </header>
        {/* <Routes/> */}
    </div>
  );
}


export default App;
