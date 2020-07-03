import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';

const showPoster = (Poster, Title) => {
    if(Poster === 'N/A'){
        return (
            <h3 style={{color: 'white'}}>Poster Not Available..</h3>
        )
    }
    else{
        return(
            <img src={Poster} alt={Title} />
        )
    }
}

const MovieCard =({movie}) => {
    console.log(movie);
    const { Title, Released, Genre, Plot, Poster, imdbRating } = movie;

    return (
        <div className="container my-2" style={{background: 'linear-gradient(265.53deg,#152530 0%,#040203 100%)'}}>
            <div className="row py-2 border border-white">
                <div className="col-sm-12 col-lg-4 col-md-6" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                    {showPoster(Poster,Title)}
                </div>
                <div className="col-sm-12 col-lg-8 ml-md-0 ml-sm-2 offset-1 col-md-6 my-2" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <Card className="mr-4">
                        <CardHeader className="h1">{Title}</CardHeader>
                        <CardBody>
                            <CardTitle>Rating: {imdbRating} / 10</CardTitle>
                            <CardSubtitle>Release Date: {Released}</CardSubtitle>
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

export default MovieCard;