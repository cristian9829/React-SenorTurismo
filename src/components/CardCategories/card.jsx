
import React, {Component} from 'react';
import style from './card.scss';

export default class Card extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="card-categories">
          <div className="overlay-card-categories">
            <div className="container-text">
              <h3 className="text-center">Lago Calima</h3>
              <div className="container-button">
                <button className="btn-card-categories text-primary">VER PLAN</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}