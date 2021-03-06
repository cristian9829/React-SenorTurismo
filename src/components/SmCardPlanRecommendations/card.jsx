import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  componentDidMount(){
    let card = document.getElementById( this.props.id + "-card-sm-plan");
    card.style.backgroundImage = "url(" + this.props.image + ")";
  }
  render(){
    return(
      <div id={this.props.id + "-card-sm-plan"} className="card-sm-plan">
        <div className="overlay-card">
          <div className={"container-text " + this.props.alignText}>
            <p className="PTitle">{this.props.Ptitle}</p>
            <p className="Stitle">{this.props.Stitle}</p>
            <p className="Ttitle">{this.props.Ttitle}</p>
          </div>
        </div>
      </div>
    )
  }
}