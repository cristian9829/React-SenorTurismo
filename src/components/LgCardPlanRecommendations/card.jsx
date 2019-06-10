import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  componentDidMount(){
    let card = document.getElementById( this.props.id + "-card-lg-plan");
    card.style.backgroundImage = "url(" + this.props.image + ")";
  }
  render(){
    return(
      <div id={this.props.id + "-card-lg-plan"} className="card-lg-plan">
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