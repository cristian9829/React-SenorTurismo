import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  componentDidMount(){
    let card = document.getElementById( this.props.id + "-LgCard-destinations");
    card.style.backgroundImage = "url(" + this.props.image + ")";
  }
  render(){
    return(
      <div id={this.props.id + "-LgCard-destinations"} className="LgCard-destinations">
        <div className="overlay-card-destinations">
          <div className="container-text text-white">
            <p className="Ptitle">{this.props.Ptitle}</p>
            <p className="Stitle">{this.props.Stitle}</p>
          </div>
        </div>
      </div>
    )
  }
}