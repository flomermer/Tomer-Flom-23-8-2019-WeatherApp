import React, {Component} from 'react';
import './style.scss';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {setCity}                    from '../../actions/city';
import {API_CALL, DEFAULT_CITY}     from '../../consts';
import LocationSearch       from './LocationSearch';
import CityWeatherDetails   from './CityWeatherDetails';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {curr_weather: {}, forecast: []};

    this.fetchWeather           =       this.fetchWeather.bind(this);
    this.getCityByGeolocation   =       this.getCityByGeolocation.bind(this);
  }
  componentDidMount(){
    const {city} = this.props;
    if(city)
      this.fetchWeather();
    else
      this.getCityByGeolocation();
  }
  componentDidUpdate(prevProps){
    if((prevProps.city!==this.props.city && this.props.city && this.props.city.id) || (prevProps.unit && prevProps.unit!==this.props.unit))
      this.fetchWeather();
  }
  async fetchWeather(){
    const {city, unit} = this.props;
    try{
      let curr_weather    =   await API_CALL('GET', `currentconditions/v1/${city.id}?details=false`);
      let forecast        =   await API_CALL('GET', `forecasts/v1/daily/5day/${city.id}?details=false&metric=${unit==='C' ? 'true' : 'false'}`);

      this.setState({curr_weather: curr_weather[0], forecast});
    }catch(e){console.log(e.message);}
  }
  async getCityByGeolocation(){
    const {setCity} = this.props;
    try{
      if (!navigator.geolocation)
        throw Error("geolocation not supported");

      const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
      if(permissionStatus.state==='denied')
        throw Error("geolocation access denied");

      navigator.geolocation.getCurrentPosition(async (location) => {
        const {coords} = location;
        const city_cb = await API_CALL('GET', `/locations/v1/cities/geoposition/search?q=${coords.latitude},${coords.longitude}&toplevel=true`);
        setCity({id: city_cb.Key, name: city_cb.EnglishName, country: city_cb.Country.EnglishName});        
      });
    }catch(e){
      setCity(DEFAULT_CITY);
    }
  }
  render(){
    const {curr_weather, forecast} = this.state;
    const {city} = this.props;
    if(!city) return <div>loading...</div>;
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
const mapStateToProps = ({city, unit}) => ({city, unit});
const mapDispatchToProps = (dispatch) => (bindActionCreators({setCity}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Home);
