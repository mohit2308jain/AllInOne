import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './weatherCard.css';

const CityCard = ({weather}) => {
    console.log(weather);
    return(
        <React.Fragment>
            <div className='col-12'>
                <Card className={`${(weather.main.temp>24)?'warm snowflake':'cold'} weathercard`}>
                    <br />
                    <CardHeader>{weather.name}, {weather.sys.country}</CardHeader>
                    <CardBody>
                    <CardTitle>Temperature: {weather.main.temp} &deg;C</CardTitle>
                    <CardSubtitle>
                        Humidity: {weather.main.humidity} | {weather.weather[0].main}
                    </CardSubtitle>
                    <CardText>{weather.weather[0].description}</CardText>
                    </CardBody>
                    <i className={`${(weather.main.temp>24)?'sun':'snowflake'} icon big icon-top-left`} />
                    <i className={`${(weather.main.temp>24)?'sun':'snowflake'} icon big icon-top-right`} />
                    <i className={`${(weather.main.temp>24)?'sun':'snowflake'} icon big icon-bottom-left`} />
                    <i className={`${(weather.main.temp>24)?'sun':'snowflake'} icon big icon-bottom-right`} />
                </Card>
            </div>
        </React.Fragment>
    )
}

export default CityCard;