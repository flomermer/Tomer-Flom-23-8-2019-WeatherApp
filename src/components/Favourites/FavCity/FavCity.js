import React, {Component} from 'react';
import './style.scss';
import {API_CALL}     from '../../../consts';
import Temp                 from '../../Misc/Temp';
import {getWeatherIconSrc}  from '../../../misc/helper';

class FavCity extends Component{
  constructor(props){
    super(props);
    this.state = {weather: null};

    this.fetchWeather         =     this.fetchWeather.bind(this);
    this.renderLoadingCity    =     this.renderLoadingCity.bind(this);
  }
  componentDidMount(){
    this.fetchWeather();
  }
  async fetchWeather(){
    const {city} = this.props;
    try{
      const weather  =   await API_CALL('GET', `currentconditions/v1/${city.id}?details=false`);
      this.setState({weather: weather[0]});
    }catch(e){console.log(e.message);}
  }
  renderLoadingCity(){
    const {city} = this.props;
    return (
      <div className='FavCity' onClick={this.props.onClick}>
        <header>{city.name}</header>
        <main>loading...</main>
      </div>
    );
  }
  render(){
    const {city} = this.props;
    const {weather} = this.state;
    if(!weather) return this.renderLoadingCity();

    const iconSrc = getWeatherIconSrc(weather.WeatherIcon);

    return(
      <div className='FavCity' onClick={this.props.onClick}>
        <header>{city.name}</header>
        <main>
          <div className='temp'><Temp temp={weather.Temperature}/></div>
          <div className='icon'><img src={iconSrc} alt={weather.WeatherText}/></div>
          <div className='desc'>{weather.WeatherText}</div>
        </main>
      </div>
    );
  }
}

export default FavCity;
