import React, {Component} from 'react';
import './style.scss';
import _ from 'lodash';
import {API_CALL}                   from '../../../consts';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {setCity}                    from '../../../actions/city';

class LocationSearch extends Component{
  constructor(props){
    super(props);
    const {city} = this.props;
    this.state = {keyword: city.name || '', locations: [], showAutoComplete: true};

    this.onChange             =     this.onChange.bind(this);
    this.fetchLocations       =     this.fetchLocations.bind(this);
    this.renderAutoComplete   =     this.renderAutoComplete.bind(this);
    this.pickLocation         =     this.pickLocation.bind(this);
  }
  componentDidMount(){
    this.autocomplete = _.debounce(function() { //debounce the fetch() while searching a city
      this.fetchLocations();
    }, 500);
  }
  onChange(e){
    e.preventDefault();
    this.setState({keyword: e.target.value}, this.autocomplete);
  }
  async fetchLocations(){
    const {keyword} = this.state;
    if(!keyword) return false;
    try{
      const locations_cb = await API_CALL(`GET`, `/locations/v1/cities/autocomplete?q=${keyword}`);
      const locations = _.map(locations_cb, location => {
        return {id: location.Key, name: location.LocalizedName, country:location.Country.LocalizedName};
      });
      this.setState({locations, showAutoComplete: true});
    }catch(e){
      console.log(e.message);
    }
  }
  renderAutoComplete(){
    const {locations, showAutoComplete} = this.state;

    if(!showAutoComplete) return false;
    let Locations = _.map(locations, location => {
      return (
        <div className='location' key={location.id} onClick={() => this.pickLocation(location)}>
          {location.name}, {location.country}
        </div>
      );
    })
    return Locations;
  }
  pickLocation(location){
    const {setCity}  = this.props;
    this.setState({showAutoComplete: false, keyword: location.name}, () => setCity(location));
  }
  render(){
    const {className, onSubmit} = this.props;
    const {keyword} = this.state;
    return(
      <form className={`LocationSearch ${className}`} onSubmit={onSubmit}>
        <input type='text' className='form-control'
               value={keyword} onChange={this.onChange}
               placeholder="Search by city name..." />
        <div className='autocomplete'>
          {this.renderAutoComplete()}
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({city}) => ({city});
const mapDispatchToProps = (dispatch) => (bindActionCreators({setCity}, dispatch));

export default connect(mapStateToProps,mapDispatchToProps)(LocationSearch);
