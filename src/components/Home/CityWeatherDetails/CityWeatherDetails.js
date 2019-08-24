import React from 'react';
import './style.scss';
import _ from 'lodash';
import {connect}      from 'react-redux';
import Temp           from '../../Misc/Temp';
import Heart          from './Heart';
import DailyForecast  from './DailyForecast';
import {getWeatherIconSrc} from '../../../misc/helper';

const CityWeatherDetails = ({className, city, unit, weather, forecast}) => {
  if(!weather || !weather.Temperature)
    return <div>loading...</div>;
  const iconSrc = getWeatherIconSrc(weather.WeatherIcon);
  return (
    <div className={`CityWeatherDetails ${className}`}>
      <header>
        <div className='title'>
          <div className='icon' style={{backgroundImage: `url(${iconSrc})`}}></div>
          <div className='city'>
            <div>{city.name}</div>
            <div><Temp temp={weather.Temperature}/></div>
          </div>
        </div>
        <div className='isFav'>
          <Heart city={city} />
        </div>
      </header>
      <main>
        <header>{weather.WeatherText}</header>
        <div className='forecast'>
          {_.map(forecast.DailyForecasts, (weather,i) => <DailyForecast key={i} weather={weather} />)}
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = ({city, unit}) => ({city, unit});

export default connect(mapStateToProps)(CityWeatherDetails);
