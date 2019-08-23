import React, {Component} from 'react';
import './style.scss';

class Favourites extends Component{
  render(){
    return(
      <div className={`Favourites ${this.props.className}`}>
        favourites
      </div>
    );
  }
}

export default Favourites;
