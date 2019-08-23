import React from 'react';
import './style.scss';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {toggleTheme}                from '../../actions/theme';
import {NavLink}                    from 'react-router-dom';
import Icon   from '../Misc/Icon';

const NavBar = ({className, theme, toggleTheme}) => {
  return (
    <div className={`NavBar ${className}`}>
      <div className='title'>Herolu Weather Tutorial</div>
      <div><Icon icon={theme==='light' ? 'toggle-off' : 'toggle-on'} size='2x' onClick={() => toggleTheme(theme)} /></div>
      <div className='links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </div>
    </div>
  )
}
function mapStateToProps({theme}){
  return {theme};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({toggleTheme}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
