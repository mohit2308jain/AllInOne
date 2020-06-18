import React from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import MovieCard2 from './MovieCard2';
import { connect } from 'react-redux';
import { fetchMoviesWithDetails } from '../redux/ActionCreater';
import SearchBar from './SearchBar';

const matchStateToProps = (state) => {
    return {
        movielist: state.movielist
    }
}

class MovieList extends React.Component{

    onSearch = (term) => {
        console.log("Termmmm: ", term);
        this.props.fetchMoviesWithDetails(term);
    }

    render(){
        const { movielist } = this.props;
        let showCards;
        if(movielist.length>0){
            showCards = movielist.map((movie) => {
                return(
                    <div>
                        <MovieCard movie={movie} key={movie.imdbID} />
                    </div>
                )
            })
        }
        else{
            showCards = (
                <p>Couldn't find any movie. Please search again using
                        another search criteria.
                    </p>
            )
        }      
        return(
            <React.Fragment>
                <SearchBar onInput={(term) => this.onSearch(term)} />
                <hr />
                {showCards}
            </React.Fragment>
        );
    }
}

export default connect(matchStateToProps, { fetchMoviesWithDetails })(MovieList);