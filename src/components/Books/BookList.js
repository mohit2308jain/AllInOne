import React from 'react';
import { connect } from 'react-redux';

import { fetchBooksWithDetails } from '../../redux/Books/ActionCreater';

import SearchBar from '../SearchBar';
import BookCard from './BookCard';

const mapStateToProps = (state) => {
    return {
        booklist: state.booklist
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchbooks: (term) => {
            return dispatch(fetchBooksWithDetails(term));
        }
    })
}

class BookList extends React.Component{

    onSearch = (term) => {
        this.props.fetchbooks(term);
    }

    render(){
        console.log("op:", this.props.booklist);
        const { isLoading, errMess, searchTerm, books } = this.props.booklist;
        let showCards;
        if(!searchTerm){
            showCards = <h1>Please Enter Book Name..</h1>
        }
        else if(isLoading){
            showCards = <h1>Loading...</h1>
        }
        else if(errMess){
            showCards = <h3>{errMess}</h3>
        }
        else{
            //console.log("Book: ", books)
            const book = books.map((book, index) => {
                return (
                    <BookCard book={book} key={index} />
                )
            })
            showCards = (<div className="row border border-dark">
                {book}
            </div>)
        } 
        return(
            <React.Fragment>
                <div className="container">
                    <SearchBar onInput={(term) => this.onSearch(term)} />
                    <hr />
                    {showCards} 
                </div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);