import React, {Component} from 'react';
import style from './card.scss';
import Car from './car.png';
import Fork from './fork.png';
import Mapa from './map.png';
import Motel from './motel.png';


export default class Card extends Component{
  render(){
    return(
      <div className="card-services">
        <div className="container">
          <div className="row container-icons">
            <div className="col-md-3">
              <div className="container-icon">
                <img 
                  src={Car}
                  className="img-fluid"
                />
                <p>Transporte</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container-icon">
                <img 
                  src={Fork}
                  className="img-fluid"
                />
                <p>Alimentacion</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container-icon">
                <img 
                  src={Motel}
                  className="img-fluid"
                />
                <p>Alojamiento</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container-icon">
                <img 
                  src={Mapa}
                  className="img-fluid"
                />
                <p>Tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}