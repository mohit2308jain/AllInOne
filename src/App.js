import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import MovieList from './components/Movies/MovieList';
import BookList from './components/Books/BookList';
import RecipeList from './components/Recipes/RecipeList';
import Weather from './components/Weather/Weather';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="mt-2"></div>
        <Switch>
          <Route path='/movies' component={MovieList} />
          <Route path='/books' component={BookList} />
          <Route path='/recipes' component={RecipeList} />
          <Route path='/weather' component={Weather} />
          <Redirect to='/movies' />
        </Switch>
        <div style={{position: 'fixed', zIndex: '100', bottom: '0', right: '0', 
            left: '0', background: 'black', color: 'white'}}>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
