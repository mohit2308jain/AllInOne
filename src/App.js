import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import MovieList from './components/Movies/MovieList';
import MovieDetails from'./components/Movies/MovieDetails';
import BookList from './components/Books/BookList';
import RecipeList from './components/Recipes/RecipeList';
import Weather from './components/Weather/Weather';
import SideNav from './components/SideNav';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <SideNav />
          <main>
          <Switch>
            <Route exact path='/movies' component={MovieList} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route exact path='/books' component={BookList} />
            <Route exact path='/recipes' component={RecipeList} />
            <Route exact path='/weather' component={Weather} />
            <Redirect to='/movies' />
          </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
