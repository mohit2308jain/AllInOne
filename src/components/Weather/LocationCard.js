import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './weatherCard.css';

import "weather-icons/css/weather-icons.css";

const LocationCard = ({weather}) => {
    console.log(weather);
    return(
            <div className='col-12'>
                <Card className={`${(weather.current.temp>24)?'warm snowflake':'cold sun'} weathercard`}>
                    <br />
                    <CardHeader>{weather.timezone}</CardHeader>
                    <CardBody>
                    <CardTitle>Temperature: {weather.current.temp} &deg;C</CardTitle>
                    <CardSubtitle>
                        Humidity: {weather.current.humidity} | {weather.current.weather[0].main}
                    </CardSubtitle>
                    <CardText>{weather.current.weather[0].description}</CardText>
                    </CardBody>
                    <i className={`${(weather.current.temp>24)?'sun':'snowflake'} icon big icon-top-left`} />
                    <i className={`${(weather.current.temp>24)?'sun':'snowflake'} icon big icon-top-right`} />
                    <i className={`${(weather.current.temp>24)?'sun':'snowflake'} icon big icon-bottom-left`} />
                    <i className={`${(weather.current.temp>24)?'sun':'snowflake'} icon big icon-bottom-right`} />
                </Card>
            </div>
    )
}

export default LocationCard;