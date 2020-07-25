import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button } from 'reactstrap';

const showPoster = (Poster, Title) => {
    if(Poster === 'N/A'){
        return (
            <h3 style={{color: 'white'}} className="border border-white">Poster Not Available..</h3>
        )
    }
    else{
        return(
            <img src={Poster} alt={Title}  className="border border-white"/>
        )
    }
}

class MovieCard extends React.Component {

    render(){
        const { Title, Released, Genre, Plot, Poster, imdbRating } = this.props.movie;

    return (
        <div className="container my-2" 
            style={{background: 'linear-gradient(265.53deg, #152530 0%,#040203 100%)', color: 'black'}}>
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
                        <Button color="primary">
                            <Link to={`/movies/${this.props.id}`} className="text-light">More Details</Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
}

export default MovieCard;