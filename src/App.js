import React from 'react';
import intl from 'react-intl-universal';
import './App.css';
import Routes from './routes';

import Loading from './components/Loader';

const locales = {
  'pt-BR': require('./locales/pt-BR.json'),
  'en-US': require('./locales/en-US.json')
};

function App() {
  const currentLocale = locales[navigator.language]
                        ? navigator.language
                        : 'pt-BR';

  intl.init({
    currentLocale,
    locales
  });
  
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
