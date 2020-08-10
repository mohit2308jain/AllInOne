import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardImg, Button } from 'reactstrap';

const showAuthors = (authors) => {

    let authorText = '';
    if(authors){
        for(let i=0;i<authors.length;i++){
            (i===authors.length-1) ? (authorText += authors[i]) :(authorText += (authors[i] + ', '))
        }
    }
    else{
        authorText = 'No Authors Available'
    }
    return authorText;
}

class BookCard extends React.Component{

    onShowDetils = (event) => {
        event.preventDefault();
        console.log(this.props.book)
        this.props.onShowDetils(this.props.book.id);
    }

    render(){
    
        const { title, language, authors, publisher, pageCount } = this.props.book.volumeInfo;
        const Poster = this.props.book.volumeInfo.imageLinks;
        let showPoster;
        if(!Poster){
            showPoster = (<h3 style={{color: 'white'}}>Poster Not Available..</h3>);
        }
        else{
            showPoster = (<CardImg top width="320px" height="240px"
                style={{objectFit: 'cover'}} src={Poster.thumbnail} alt={title} />)
        }
        
        return (
            <div className="d-flex col-12 col-md-6 col-lg-4 my-2">
                <Card className="flex-fill" style={{background: 'black', color: 'white', 
                    border: 'solid #23238E 5px', borderRadius: '25px'}}>
                    <CardHeader className="h4">{title}</CardHeader>
                    {showPoster}
                    <CardBody style={{background: '#111'}}>
                        <CardTitle>Authors: {showAuthors(authors)}</CardTitle>
                        <CardSubtitle>
                            Language: {language} | PageCount: {pageCount}
                            <br />Publisher: {publisher}
                        </CardSubtitle>
                        </CardBody>
                    <Button onClick={(event) => this.onShowDetils(event)} color="danger"
                        style={{borderRadius: '0px 0px 20px 20px'}}>
                        More Details
                    </Button>
                </Card>
            </div>
        );
    }
}

export default BookCard;