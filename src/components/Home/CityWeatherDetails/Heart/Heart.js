import React  from 'react';
import './style.scss';
import _      from 'lodash';
import {connect}                            from 'react-redux';
import {bindActionCreators}                 from 'redux';
import {toggleCityInFavs}                   from '../../../../actions/favourites';
import Icon                                 from '../../../Misc/Icon';

const Heart = ({favourites, city, toggleCityInFavs}) => {
  const isFav = _.find(favourites, {id: city.id});

  return (
    <div className={`Heart ${!isFav && 'off'}`} onClick={() => toggleCityInFavs(city, isFav)}>
      <Icon icon='heart' size='2x'/>
    </div>
  )
}

const mapStateToProps = ({favourites}) => ({favourites});
const mapDispatchToProps = (dispatch) => (bindActionCreators({toggleCityInFavs}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Heart);
