import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './weatherCard.css';

/*
import "weather-icons/css/weather-icons.css";

const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
};
/*
this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
<h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

const getWeatherIcon = (icons, rangeId) => {
    let icon;
    switch (rangeId) {
      case rangeId >= 200 && rangeId < 232:
        icon = icons.Thunderstorm;
        break;
      case rangeId >= 300 && rangeId <= 321:
        icon = icons.Drizzle;
        break;
      case rangeId >= 500 && rangeId <= 521:
        icon = icons.Rain;
        break;
      case rangeId >= 600 && rangeId <= 622:
        icon = icons.Snow;
        break;
      case rangeId >= 701 && rangeId <= 781:
        icon = icons.Atmosphere;
        break;
      case rangeId === 800:
        icon = icons.Clear;
        break;
      case rangeId >= 801 && rangeId <= 804:
        icon = icons.Clouds;
        break;
      default:
        icon = icons.Clouds;
    }
  }
*/
const CityCard = ({weather}) => {
    console.log(weather);
    return(
        <React.Fragment>
            <div className='col-12 weathercard'>
                <Card className={`${(weather.main.temp>24)?'warm':'cold'}`}>
                    <CardHeader>{weather.name}, {weather.sys.country}</CardHeader>
                    <CardBody>
                    <CardTitle>Temperature: {weather.main.temp} &deg;C</CardTitle>
                    <CardSubtitle>
                        Humidity: {weather.main.humidity} | {weather.weather[0].main}
                    </CardSubtitle>
                    <CardText>{weather.weather[0].description}</CardText>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default CityCard;