import React from 'react';
import Main from './pages/main';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          This is git history explorer!{' '}
          <a href='https://github.com/WebExp0528/Git-History-Explorer'>
            Repository URL
          </a>
        </p>
      </header>
      <Main />
    </div>
  );
}

export default App;
