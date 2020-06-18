import React from 'react';
import axios from 'axios';

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, CardImg } from 'reactstrap';

class MovieCard2 extends React.Component {
    state = {
        movieData: {}
    };

    componentDidMount() {
        axios
            .get(
                `https://www.omdbapi.com/?apikey=756abb2f&i=${
                    this.props.movieID
                }`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }

    render() {
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
            <div className="container">
                <div className="row py-2 border border-dark">
                    <div className="col-sm-12 col-md-6">
                        <Card style={{background: '#111', color:'white'}}>
                            <CardHeader className="h1">{Title}</CardHeader>
                            <CardImg src={`${Poster}`} alt="Card image cap" style={{height:'240px'}}/>
                            <CardBody>
                                <CardTitle>Rating: {imdbRating} / 10</CardTitle>
                                <CardSubtitle>Released Date: {Released}</CardSubtitle>
                                <CardText>
                                    {Plot && Plot.substr(0, 350)}
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                {Genre && Genre.split(', ').map(g => 
                                <span className="badge badge-light border border-dark m-1">{g}</span>)}
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Card style={{background: '#111', color:'white'}}>
                            <CardHeader className="h1">{Title}</CardHeader>
                            <CardImg src={`${Poster}`} alt="Card image cap" style={{height:'240px'}}/>
                            <CardBody>
                                <CardTitle>Rating: {imdbRating} / 10</CardTitle>
                                <CardSubtitle>Released Date: {Released}</CardSubtitle>
                                <CardText>
                                    {Plot && Plot.substr(0, 350)}
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

export default MovieCard2;