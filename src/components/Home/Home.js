import React, {Component} from 'react';
import './style.scss';
import {connect}      from 'react-redux';
import {API_CALL}     from '../../consts';
import LocationSearch       from './LocationSearch';
import CityWeatherDetails   from './CityWeatherDetails';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {curr_weather: {}, forecast: []};

    this.fetchWeather     =       this.fetchWeather.bind(this);
  }
  componentDidMount(){
    const {city} = this.props;
    if(city)
      this.fetchWeather();
  }
  componentDidUpdate(prevProps){
    if(prevProps.city!==this.props.city && this.props.city && this.props.city.id)
      this.fetchWeather();
  }
  async fetchWeather(){
    const {city} = this.props;
    console.log(`fetch weather to: ${city.name} - ${city.id}`);
    try{
      let curr_weather  =   await API_CALL('GET', `currentconditions/v1/${city.id}?details=false`);
      let forecast      =   await API_CALL('GET', `forecasts/v1/daily/5day/${city.id}?details=false&metric=true`);
      this.setState({curr_weather: curr_weather[0], forecast});
    }catch(e){console.log(e.message);}
  }
  render(){
    const {curr_weather, forecast} = this.state;
    return(
      <div className={`Home ${this.props.className}`}>
        <header>
          <LocationSearch onSubmit={this.fetchWeather} />
        </header>
        <main>
          <CityWeatherDetails weather={curr_weather} forecast={forecast} />
        </main>
      </div>
    );
  }
}
const mapStateToProps = ({city}) => ({city});

export default connect(mapStateToProps)(Home);
