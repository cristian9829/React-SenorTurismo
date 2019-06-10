import React, {Component} from 'react';
import style from '../../assets/footer.scss';
import social from './images/socialFooter.svg';

export default class Footer extends Component{
  render(){
    return(
      <footer className="text-white mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><h5>MENÙ</h5></li>
                <li>Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul>
                <li><h5>GUIAS DE VIAJE</h5></li>
                <li>Lodging</li>
                <li>Gastronomy</li>
                <li>Activities</li>
                <li>Culture</li>
                <li>Transportation</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5>SIGUENOS</h5>
              <img
                src={social}
                className="img-fluid"
              />
            </div>

            <div className="col-md-3">
              <h4>Suscribete</h4>
              <form>
                <label htmlFor="info-input">Recibe informacion de nuestros servicios</label>
                <div className="row">
                  <div className="col-md-9">
                    <input 
                      id="info-input"
                      className="form-control"
                      placeholder="Escribe tu correo electronico"
                    />
                  </div>
                  <div className="col-md-3">
                    <input id="btn-info" className="btn btn-info" value="Enviar" type="submit"/>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </footer>
    )
  }
}