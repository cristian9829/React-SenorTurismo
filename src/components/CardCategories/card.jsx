
import React, {Component} from 'react';
import styles from './card.scss';

export default class Card extends Component{
  
    
    componentDidMount(){
      let card = document.getElementById( this.props.id + "-card-categories");
      card.style.backgroundImage = "url(" + this.props.image + ")";
      console.log(this.props.image)
    }
  render(){
    return(
      <React.Fragment>
        <div id={this.props.id + "-card-categories"} className="card-categories">
          <div className="overlay-card-categories">
            <div className="container-text">
              <h3 className="text-center title">{this.props.title}</h3>
              <div className="container-button">
                <button className="btn-card-categories">VER PLAN</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}