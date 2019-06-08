import React, {Component} from 'react';

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
            <button className="btn btn-warning btn-lg">VER PLAN</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
