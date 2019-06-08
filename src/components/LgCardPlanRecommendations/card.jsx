import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  render(){
    return(
      <div className="card-lg-plan">
        <div className="overlay-card">
          <div className="container-text">
            <p>{this.props.Ptitle}</p>
            <h2>{this.props.Stitle}</h2>
            <h4>{this.props.Ttitle}</h4>
          </div>
        </div>
      </div>
    )
  }
}