import React from 'react';
import Header from './components/Header';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
     <Header conteudo={<Routes/>}/>
    </div>
  );
}

export default App;
