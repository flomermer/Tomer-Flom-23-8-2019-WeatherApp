import {Component} from 'react';
import {connect} from 'react-redux';

const themes = {
  light: {
    backgroundColor: '#f8f8f8',
    textColor: '#0033a9',
    navColor: '#0033a9'
  },
  dark: {
    backgroundColor: '#0033a9',
    textColor: '#f8f8f8',
    navColor: '#f8f8f8'
  }
}
class Theme extends Component{
  componentDidMount(){
    this.updateTheme();
  }
  componentDidUpdate(prevProps){
    if(prevProps.theme!==this.props.theme)
      this.updateTheme();
  }
  updateTheme(){
    const {theme} = this.props;
    const app = document.querySelector('.App');
    for(var cssVar in themes[theme])
      app.style.setProperty(`--${cssVar}`, themes[theme][cssVar]);
  }
  render(){
    return null;
  }
}

const mapStateToProps = ({theme}) => ({theme});

export default connect(mapStateToProps)(Theme);
