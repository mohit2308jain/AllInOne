import React from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard';
import MovieCard2 from './MovieCard2';
import { connect } from 'react-redux';
import { fetchMoviesWithDetails } from '../redux/ActionCreater';

const matchStateToProps = (state) => {
    return {
        movielist: state.movielist
    }
}

class MoviesList extends React.Component {
    state = {
        moviesList: ['tt2294629'],
        searchTerm: ''
    };

    componentDidMount(){
        this.props.fetchMoviesWithDetails();
    }

    search = event => {
        event.preventDefault();
        axios
            .get(
                `https://www.omdbapi.com/?apikey=756abb2f&s=${this.state.searchTerm}`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        console.log('propssss: ',this.props);
        const { moviesList } = this.state;

        return (
            <div>
                <form onSubmit={this.search}>
                    <input
                        placeholder="Search for a movie"
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        <i className="fa fa-search" />
                    </button>
                </form>
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        
                            <div>
                            <MovieCard2 movieID={movie} key={movie} />
                            </div>
                    ))
                ) : (
                    <p>
                        Couldn't find any movie. Please search again using
                        another search criteria.
                    </p>
                )}
            </div>
        );
    }
}


export default connect(matchStateToProps, { fetchMoviesWithDetails })(MoviesList);
