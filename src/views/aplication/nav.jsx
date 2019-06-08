import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import style from '../../assets/nav.scss';


export default class Nav extends Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      background: this.props.styles,
      color: this.props.color
    }
  }
  componentDidMount(){
    window.onscroll = () => {
      this.effectNav(this.props.coloreffect)
    }
  }

  effectNav(coloreffect){
    if (document.body.scrollTop > this.props.scroll || document.documentElement.scrollTop > this.props.scroll) {
      this.setState({
        background: this.props.effect_nav,
        color: this.props.color 
      })
    } else {
      this.setState({
        background: this.props.styles,
        color: "navbar-dark"
      })
    } 
  }
  render(){
    return(
      <nav id="nav" className= {"navbar navbar-expand-sm fixed-top " + this.state.color + " justify-content-between " + this.state.background}>
        <div className="container">
            <a className="navbar-brand" href="#">Logo</a>
        
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  activeClassName="active" 
                  className="nav-link" >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONÓCENOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TOURS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PLANES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ACOMPAÑAMIENTO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACTO</a>
              </li>
            </ul>
          </div>
      </nav>
    )
  }
}