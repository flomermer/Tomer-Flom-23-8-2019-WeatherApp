import React, {Component} from 'react';
import './style.scss';
import {connect}      from 'react-redux';

const CityWeatherDetails = ({className, city, weather, forecast}) => {
  if(!weather || !forecast || !weather.Temperature || !weather.Temperature.Metric){
    console.log(`no weather yet!`);
    return <div>loading...</div>;
  }
  return (
    <div className={`CityWeatherDetails ${className}`}>
      <header>
        <div className='title'>
          <div>{city.name}</div>
          <div>{weather.Temperature.Metric.Value}</div>
        </div>
        <div className='fav'>favourites</div>
      </header>
    </div>
  )
}

const mapStateToProps = ({city}) => ({city});

export default connect(mapStateToProps)(CityWeatherDetails);
