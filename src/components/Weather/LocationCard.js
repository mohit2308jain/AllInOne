import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './weatherCard.css';

import "weather-icons/css/weather-icons.css";

const LocationCard = ({weather}) => {
    console.log(weather);
    return(
        <React.Fragment>
            <div className='col-12 weathercard'>
                <Card className={`${(weather.current.temp>24)?'warm':'cold'}`}>
                    <CardHeader>{weather.timezone}</CardHeader>
                    <CardBody>
                    <CardTitle>Temperature: {weather.current.temp} &deg;C</CardTitle>
                    <CardSubtitle>
                        Humidity: {weather.current.humidity} | {weather.current.weather[0].main}
                    </CardSubtitle>
                    <CardText>{weather.current.weather[0].description}</CardText>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default LocationCard;