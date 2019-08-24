import React from 'react';
import './style.scss';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {toggleTheme}                from '../../actions/theme';
import {toggleUnit}                 from '../../actions/unit';
import {NavLink}                    from 'react-router-dom';
import Icon   from '../Misc/Icon';

const NavBar = ({className, theme, toggleTheme, toggleUnit, unit}) => {
  return (
    <div className={`NavBar ${className}`}>
      <div className='title'>Weather Tutorial</div>
      <div className='options'>
        <div className='theme'>
          <Icon icon={theme==='light' ? 'toggle-off' : 'toggle-on'} size='2x' onClick={() => toggleTheme(theme)} />
        </div>
        <div className='unit' title={`${unit==='C' ? 'switch units to Fahrenheit' : 'switch units to Celsius'}`} onClick={() => toggleUnit(unit)}>
          {unit}°
        </div>
      </div>
      <div className='links'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </div>
    </div>
  )
}
const mapStateToProps = ({theme, unit}) => ({theme, unit});
const mapDispatchToProps = (dispatch) => (bindActionCreators({toggleTheme, toggleUnit}, dispatch));

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
