import React from 'react';
import './style.scss';
import moment from 'moment';
import {getWeatherIconSrc} from '../../../../misc/helper';

const DailyForecast = ({className, weather}) => {
  if(!weather || !weather.Date) return null;
  const maxTemp = weather.Temperature.Maximum.Value;
  const minTemp = weather.Temperature.Minimum.Value;

  const timeInt     =   Number(moment().format('HH'));
  const dayOrNight  =   (timeInt >= 5 && timeInt < 17) ? 'Day' : 'Night';
  const iconSrc     =   getWeatherIconSrc(weather[dayOrNight].Icon);
  const desc        =   weather[dayOrNight].IconPhrase;

  return (
    <div className='DailyForecast'>
      <div className='day'>{moment(weather.Date).format('dddd')}</div>
      <div className='temp'>{minTemp}° - {maxTemp}°</div>
      <div className='icon'><img src={iconSrc} alt={desc} /></div>
      <div className='desc'>{desc}</div>
    </div>
  );
}

export default DailyForecast;
