import React, {Component} from 'react';
import style from '../../assets/nav.scss';
import social from './images/social.svg';
import logo from './images/logo.png';


export default class Nav extends Component{
  render(){
    return(
      <nav id="nav" className="navbar navbar-expand-sm bg-white nav-dark fixed-top">
        <div className="container-items">
          <div className="container-logo">
                <img 
                  src={logo}
                  className="img-fluid"
                />
          </div>
          
          <img
            src={social}
            className="img-fluid mr-5"
          />
        </div>
      </nav>
    )
  }
}