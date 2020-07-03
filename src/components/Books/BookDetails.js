import React from 'react';
import { Card, Badge, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap';

class BookDetails extends React.Component{
    onShowList = (event) => {
        event.preventDefault();
        this.props.onShowList();
    }

    render(){
        const book = this.props.book.volumeInfo;
        const year = book.publishedDate.substring(0,4);
        const description = (book.description) ? (book.description) : 'No Description Available';

        const Poster = this.props.book.volumeInfo.imageLinks;
        let showPoster;
        if(!Poster){
            showPoster = (<h3 style={{color: 'white'}}>Poster Not Available..</h3>);
        }
        else{
            showPoster = (<img width="320px" height="240px" src={Poster.thumbnail} 
            alt={book.title}  className="border border-white"/>)
        }

        return(
            <div className="container">
                <Button color="danger" onClick={(event) => this.onShowList(event)} className="text-left m-2">
                    Go back
                </Button>

                <Card className="border border-white mb-3"
                style={{background: 'linear-gradient(265.53deg, #152530 0%,#040203 100%)'}}>
                    <CardBody>

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-md-6" 
                                style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                                {showPoster}
                            </div>
                            
                            <div className="col-sm-12 col-lg-8 col-md-6 text-left">
                                <CardTitle className="display-4 mb-2 font-weight bold"><u>{book.title}</u></CardTitle>
                                <div className="h3 mb-2">{year}</div>
                                <div className="h4 mb-4">{book.publisher}</div>

                                <div className="h5 mb-1">Language : 
                                    <span><Badge color="danger" className="border border-white m-2">
                                        {book.language}
                                    </Badge></span>
                                </div>

                                <div className="h5 mb-1">Pagecount : 
                                    <span><Badge color="warning" className="border border-white m-2">
                                        {book.pageCount}
                                    </Badge></span>
                                </div>

                                <div className="h4 mb-1">Languages</div>
                                <div className="h5 mb-2">
                                    {book.authors.map((author) => {
                                        return(
                                            <span><Badge color="success" className="border border-white m-2">
                                                {author}
                                            </Badge></span>
                                        )})
                                    }
                                </div>
                            </div>
                        </div>
                        <hr className="border-bottom border-white"/>

                        <div className="row">
                            <CardText className="col-12 h5 text-left">
                                {description}
                            </CardText>
                        </div>
                    </CardBody>

                    <CardFooter className="border-bottom border-white">
                        <Button color="primary" onClick={() => window.open(book.previewLink, "_blank")} className="mr-2">See Preview</Button>
                        <Button color="primary" onClick={() => window.open(book.infoLink, "_blank")}>Google Books Link</Button>
                    </CardFooter>
                    <Button color="danger" onClick={(event) => this.onShowList(event)}>
                        <h4>Go back</h4>
                    </Button>
                </Card>
            </div>
        )
    }
}
export default BookDetails;