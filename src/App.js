import React from 'react';
import './App.scss';

import { Nav, Homepage, Footer } from './components'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
