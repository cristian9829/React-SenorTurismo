import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  render(){
    return(
      <div className="SmCard-destinations">
        <div className="overlay-destinations-card">
          <div className="container-text text-white">
            <h2>{this.props.title}</h2>
          </div>
        </div>
      </div>
    )
  }
}