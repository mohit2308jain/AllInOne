import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';

class MovieCard extends React.Component {
    render() {
        //console.log("Whyy: ", this.props.movie)
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.props.movie;

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
            <div className="container my-1" style={{background: '#111'}}>
                <div className="row py-2 border border-dark">
                    <div className="col-sm-12 col-lg-4 col-md-6">
                    <img src={`${Poster}`}/>
                    </div>
                    <div className="col-sm-12 col-lg-8 col-md-6" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <Card className="mr-4">
                            <CardHeader className="h1">{Title}</CardHeader>
                            <CardBody>
                                <CardTitle>Rating: {imdbRating} / 10</CardTitle>
                                <CardSubtitle>Released Date: {Released}</CardSubtitle>
                                <CardText>
                                    {Plot}
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                {Genre && Genre.split(', ').map(g => 
                                <span className="badge badge-light border border-dark m-1">{g}</span>)}
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;