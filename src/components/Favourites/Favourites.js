import React, {Component} from 'react';
import './style.scss';
import _ from 'lodash';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {setCity}                    from '../../actions/city';
import {withRouter}                 from 'react-router-dom';
import FavCity            from './FavCity';

class Favourites extends Component{
  componentDidUpdate(prevProps){
    if(prevProps.city && prevProps.city!==this.props.city) 
      this.props.history.push('/');
  }
  render(){
    const {className, favourites, setCity} = this.props;

    return(
      <div className={`Favourites ${className}`}>
        {_.map(favourites, city => <FavCity key={city.id} city={city} onClick={() => setCity(city)} />)}
      </div>
    )
  }
}

const mapStateToProps = ({favourites, city}) => ({favourites, city});
const mapDispatchToProps = (dispatch) => (bindActionCreators({setCity}, dispatch));

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favourites));
