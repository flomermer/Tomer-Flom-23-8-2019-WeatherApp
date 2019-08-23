import React, {Component} from 'react';
import './style.scss';

class Home extends Component{
  render(){
    return(
      <div className={`Home ${this.props.className}`}>
        Home!
      </div>
    );
  }
}

export default Home;
