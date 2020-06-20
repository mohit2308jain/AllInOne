import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import SearchBar from '../SearchBar';

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
        const { weather, isLoading, errMess } = this.props.weather;
        console.log(weather)
        let showData;
        if(isLoading){
            showData = <h1>Loading...</h1>
        }
        else if(errMess){
            showData = <h1>{errMess}</h1>
        }
        else{
            showData = <h1>Weather</h1>
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