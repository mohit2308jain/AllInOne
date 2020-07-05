import React from 'react';
import { connect } from 'react-redux';
import { Button, Spinner } from 'reactstrap';
//import './a.css';

import SearchBar from './SearchBarWeather';
import LocationCard from './LocationCard';
import CityCard from './CityCard';

import { fetchWeatherByLocation, fetchWeatherFromCityName } from '../../redux/Weather/ActionCreater';

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchWeatherByLocation: (lat, lon) => {
            return dispatch(fetchWeatherByLocation(lat, lon));
        },
        fetchWeatherByCity: (term) => {
            return dispatch(fetchWeatherFromCityName(term));
        }
    })
}

class Weather extends React.Component{

    componentDidMount(){
        this.fetchLocation();
    }

    onSearch = (term) => {
        this.props.fetchWeatherByCity(term);
    }

    fetchLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            position => this.props.fetchWeatherByLocation(position.coords.latitude,position.coords.longitude),
            err => this.props.fetchWeatherByLocation()
        );
    }
    
    onCurrentLocation = () => {
        this.fetchLocation();
    }

    render(){
        const { cityWeather, locationWeather, isLoading, errMess } = this.props.weather;
        let showData;
        if(isLoading){
            showData = <div>
                <Spinner style={{ width: '5rem', height: '5rem' }} color="danger" type="grow" />
                <h1>Loading...</h1>
                </div>
        }
        else if(errMess){
            showData = <h1>{errMess}</h1>
        }
        else{
            if(Object.keys(cityWeather).length){
                console.log(cityWeather);
                showData = <CityCard weather={cityWeather} />
            }
            else if(Object.keys(locationWeather).length){
                console.log(locationWeather);
                showData = <LocationCard weather={locationWeather} />
            }
        }

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <SearchBar onInput={(term) => this.onSearch(term)} />
                        </div>
                        <div className="col-4 offset-md-1 col-md-3">
                            <Button className="fa fa-map-marker font-weight-bold" color="danger" onClick={() => this.onCurrentLocation()}>
                                <span>  </span>  Current Location
                            </Button>
                        </div>
                    </div>
                </div>  
                <hr className="border border-white"/>
                {showData}
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);