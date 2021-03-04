import React from 'react';
import './App.sass';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
