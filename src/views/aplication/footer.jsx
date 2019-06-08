import React, {Component} from 'react';

export default class Footer extends Component{
  render(){
    return(
      <footer className="bg-dark pt-5 pb-5 text-white mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1>LOGO</h1>
            </div>

            <div className="col-md-3">
              <a href="#" className="btn btn-link text-white">Cali, Valle, Cauca</a><br/>
              <a href="#" className="btn btn-link text-white">Colombia</a><br/>
              <a href="#" className="btn btn-link text-white">BIH</a>
            </div>

            <div className="col-md-3">
              <a href="#" className="btn btn-link text-white">+57 3271822879</a><br/>
              <a href="#" className="btn btn-link text-white">Terminos y Condiciones</a><br/>
              <a href="#" className="btn btn-link text-white">Politica de Uso</a>
            </div>

            <div className="col-md-3">
              <h4>Siguenos en Redes</h4>

            </div>
          </div>
        </div>
      </footer>
    )
  }
}