import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  componentDidMount(){
    let card = document.getElementById( this.props.id + "-SmCard-destinations");
    card.style.backgroundImage = "url(" + this.props.image + ")";
  }
  render(){
    return(
      <div id={this.props.id + "-SmCard-destinations"} className="SmCard-destinations">
        <div className="overlay-destinations-card">
          <div className="container-text text-white">
            <p>{this.props.title}</p>
          </div>
        </div>
      </div>
    )
  }
}