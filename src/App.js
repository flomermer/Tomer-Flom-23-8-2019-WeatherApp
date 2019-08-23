import React from 'react';
import './App.scss';
import './misc/font-awesome-lib';
import {BrowserRouter as Router, Route}   from 'react-router-dom';
import Theme        from  './components/Theme';
import NavBar       from  './components/NavBar';
import Home         from  './components/Home';
import Favourites   from  './components/Favourites';

function App() {
  return (
    <Router>
      <div className="App">
        <Theme />
        <header><NavBar /></header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/favourites" component={Favourites} />
        </main>
      </div>
    </Router>
  );
}

export default App;
