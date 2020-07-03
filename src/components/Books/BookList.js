import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import { fetchBooksWithDetails } from '../../redux/Books/ActionCreater';

import SearchBar from '../SearchBar';
import BookCard from './BookCard';
import BookDetails from './BookDetails';

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

    state = {
        selectedBook: ''
    }

    showBookDetails = (id) => {
        this.setState({selectedBook: id});
    }

    showBookList = () => {
        this.setState({selectedBook: ''})
    }

    onSearch = (term) => {
        this.setState({selectedBook: ''})
        this.props.fetchbooks(term);
    }

    render(){
        const { isLoading, errMess, searchTerm, books } = this.props.booklist;
        let showCards;
        if(!searchTerm){
            showCards = <h1>Please Enter Book Name..</h1>
        }
        else if(isLoading){
            showCards = <div>
                <Spinner style={{ width: '5rem', height: '5rem' }} color="danger" type="grow" />
                <h1>Loading...</h1>
                </div>
        }
        else if(errMess){
            showCards = <h3>{errMess}</h3>
        }
        else{
            if(this.state.selectedBook===''){
                const book = books.map((book, index) => {
                    return(
                        <BookCard book={book} key={book.id} id={book.id}
                        onShowDetils={(id) => this.showBookDetails(id)}/>      
                    )
                })
                showCards = (<div className="row border border-white">
                    {book}
                </div>)
            }
            else{
                showCards = <BookDetails
                    book={books.filter((book) => book.id === this.state.selectedBook)[0]}
                    onShowList={() => this.showBookList()}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookList);