import React from 'react';
import { Card, Badge, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const showPoster = (Poster, Title) => {
    if(Poster === 'N/A'){
        return (
            <h3 style={{color: 'white'}} className="border border-white">Poster Not Available..</h3>
        )
    }
    else{
        return(
            <img src={Poster} alt={Title} className="border border-white"/>
        )
    }
}

const showRatings = (ratings) => {
    const data = ratings.map((rating) => {
        return(
            <div><Badge color="light" className="border border-dark m-2">
                {rating.Source}: {rating.Value}
            </Badge></div>
        )
    })

    return data;
}

class MovieDetails extends React.Component{
    onShowList = (event) => {
        event.preventDefault();
        this.props.onShowList();
    }

    render(){
        const movie = this.props.movie;

        console.log(movie);

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
                            {showPoster(movie.Poster,movie.Title)}
                            </div>
                            
                            <div className="col-sm-12 col-lg-8 col-md-6 text-left">
                                <CardTitle className="display-4 mb-2 font-weight bold"><u>{movie.Title}</u></CardTitle>
                                <div className="h3 mb-2">{movie.Year}</div>
                                <div className="h4 mb-4">
                                    {movie.Genre && movie.Genre.split(', ').map((g) => {
                                        return(
                                            <span><Badge color="light" className="border border-dark mr-2">
                                                {g}
                                            </Badge></span>
                                        )})
                                    }
                                </div>

                                <div className="h4 mb-1">Actors</div>
                                <div className="h5 mb-3">
                                    {movie.Actors.split(', ').map((actor) => {
                                        return(
                                            <span><Badge color="danger" className="border border-white m-2">
                                                {actor}
                                            </Badge></span>
                                        )})
                                    }
                                </div>

                                <div className="h4 mb-1">Directors</div>
                                <div className="h5 mb-2">
                                    {movie.Director.split(', ').map((director) => {
                                        return(
                                            <span><Badge color="warning" className="border border-white m-2">
                                                {director}
                                            </Badge></span>
                                        )})
                                    }
                                </div>

                                <div className="h4 mb-1">Languages</div>
                                <div className="h5 mb-2">
                                    {movie.Language.split(', ').map((lan) => {
                                        return(
                                            <span><Badge color="success" className="border border-white m-2">
                                                {lan}
                                            </Badge></span>
                                        )})
                                    }
                                </div>
                                
                                <div className="h4 mb-1">Ratings</div>
                                <div  className="h5 mb-2">{showRatings(movie.Ratings)}</div>
                            </div>
                        </div>
                        <hr className="border-bottom border-white"/>

                        <div className="row">
                            <CardText className="col-12 h3 text-left">
                                {movie.Plot}
                            </CardText>
                        </div>
                        <hr className="border-bottom border-white"/>
                        <div className="row">
                            <CardText className="col-12 text-left">
                                <div className="h3 mb-1"><u>Writers</u></div>
                                <div className="h4">{movie.Writer}</div>
                            </CardText>
                        </div>
                        <hr className="border-bottom border-white"/>
                    </CardBody>
                    <Button color="danger" onClick={(event) => this.onShowList(event)}>
                        <h4>Go back</h4>
                    </Button>
                </Card>
            </div>
        )
    }
}
export default MovieDetails;