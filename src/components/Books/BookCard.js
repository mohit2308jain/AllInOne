import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardImg, CardFooter, Button } from 'reactstrap';

const showAuthors = (authors) => {

    let authorText = '';
    for(let i=0;i<authors.length;i++){
        (i===authors.length-1) ? (authorText += authors[i]) :(authorText += (authors[i] + ', '))
    }
    return authorText;
}

const BookCard =({book, key, id}) => {
    
    const { title, language, authors, publisher, previewLink, infoLink, pageCount } = book.volumeInfo;
    const Poster = book.volumeInfo.imageLinks;
    let showPoster;
    if(!Poster){
        showPoster = (<h3 style={{color: 'white'}}>Poster Not Available..</h3>);
    }
    else{
        showPoster = (<CardImg top width="320px" height="240px" src={Poster.thumbnail} alt={title} />)
    }
    //console.log("print: ",authors);
    
    return (
        <div className="col-12 col-md-6 col-lg-4 my-2">
            <Card style={{background: 'black', color: 'white', border: 'solid blue 5px'}}>
                <CardHeader className="h1">{title}</CardHeader>
                {showPoster}
                <CardBody style={{background: '#111'}}>
                    <CardTitle>Authors: {showAuthors(authors)}</CardTitle>
                    <CardSubtitle>
                        Language: {language} | PageCount: {pageCount}
                        <br />Publisher: {publisher}
                    </CardSubtitle>
                    </CardBody>
                <CardFooter>
                    <Button color="primary" onClick={() => window.open(previewLink, "_blank")} className="mr-2">See Preview</Button>
                    <Button color="primary" onClick={() => window.open(infoLink, "_blank")}>See Info</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default BookCard;