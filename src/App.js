import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import MovieList from './components/Movies/MovieList';
import BookList from './components/Books/BookList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="mt-2"></div>
        <Switch>
          <Route path='/movies' component={MovieList} />
          <Route path='/books' component={BookList} />
          <Redirect to='/movies' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
