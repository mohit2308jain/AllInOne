import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
//import './a.css';

import SearchBar from '../SearchBar';
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
            showData = <h1>Loading...</h1>
        }
        else if(errMess){
            showData = <h1>{errMess}</h1>
        }
        else{
            if(Object.keys(cityWeather).length){
                console.log(cityWeather);
                showData = <div className="row"><CityCard weather={cityWeather} /></div>
            }
            else if(Object.keys(locationWeather).length){
                console.log(locationWeather);
                showData = <div className="row"><LocationCard weather={locationWeather} /></div>
            }
        }

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-9">
                            <SearchBar onInput={(term) => this.onSearch(term)} />
                        </div>
                        <div className="col-6 col-md-3">
                            <Button onClick={() => this.onCurrentLocation()}>Current Location</Button>
                        </div>
                    </div>
                    <hr />    
                    {showData}
                </div>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);