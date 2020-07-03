import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import { fetchMoviesWithDetails } from '../../redux/Movies/ActionCreater';

import SearchBar from '../SearchBar';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

const mapStateToProps = (state) => {
    return {
        movielist: state.movielist
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchMovies: (term) => {
            return dispatch(fetchMoviesWithDetails(term));
        }
    })
}

class MovieList extends React.Component{
    state = {
        selectedMovie: ''
    }

    showMovieDetails = (id) => {
        this.setState({selectedMovie: id});
    }

    showMovieList = () => {
        this.setState({selectedMovie: ''})
    }

    onSearch = (term) => {
        this.setState({selectedMovie: ''})
        this.props.fetchMovies(term);
    }

    render(){
        //console.log(this.props.movielist);
        const { isLoading, errMess, searchTerm, movies } = this.props.movielist;
        let showCards;
        if(!searchTerm){
            showCards = <h1>Please Enter Movie Name..</h1>
        }
        else if(isLoading){
            showCards = <div>
                <Spinner style={{ width: '5rem', height: '5rem' }} color="danger" type="grow" />
                <h1>Loading...</h1>
                </div>
        }
        else if(errMess){
            console.log(errMess);
            showCards = (
                <h3>Couldn't find any movie. Please search again using another search criteria.</h3>
            )
        }
        else{
            if(this.state.selectedMovie===''){
                showCards = movies.map((movie, index) => {
                    return(
                        <div>
                            <MovieCard movie={movie} key={movie.imdbID} id={movie.imdbID} 
                            onShowDetils={(id) => this.showMovieDetails(id)}/>
                        </div>
                    )
                })
            }
            else{
                showCards = <MovieDetails
                    movie={movies.filter((movie) => movie.imdbID === this.state.selectedMovie)[0]} 
                    onShowList={() => this.showMovieList()}/>
            }
        }
             
        return(
            <React.Fragment>
                <div className="container">
                    <SearchBar onInput={(term) => this.onSearch(term)} />
                    <hr className="border border-white"/>
                    {showCards}
                    </div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);