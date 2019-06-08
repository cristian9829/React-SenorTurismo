import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  render(){
    return(
      <div className="card-sm-plan">
        <div className="overlay-card">
          <div className={"container-text " + this.props.alignText}>
            <p>{this.props.Ptitle}</p>
            <h2>{this.props.Stitle}</h2>
          </div>
        </div>
      </div>
    )
  }
}