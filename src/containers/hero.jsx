import React, {Component} from 'react';
import CardHero from '../components/CardHeroServices/card';

export default class Hero extends Component{
  render(){
    return(
      <div className="section__home-hero">
        <div className="overlay-hero">
          <div className="container">
            <div className="container-text">
              <h1>BASILICA DEL SEÑOR DEL LOS MILAGROS</h1>
              <p>Buga - Valle</p>
              <br/>
              <button className="btn btn-warning btn-lg btn-hero">VER PLAN</button>
            </div>
          </div>
          <br/>
          <div className="container-card-hero">
            <CardHero/>
          </div>
        </div>
      </div>
    )
  }
}
