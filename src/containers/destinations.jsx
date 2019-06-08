import React, {Component} from 'react';
import SmCard from '../components/SmCardDestionations/card';
import LgCard from '../components/LgCardDestinations/card';

export default class Destinations extends Component{
  render(){
    return(
      <div className="section__home-destinations">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-primary">NUESTROS DESTINOS</h1>
            </div>
          </div>
          <br/>
          <div className="row">
          
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12">
                    <SmCard
                      title="Buga"
                    />
                    <br/>
                  </div>
                  <div className="col-md-12">
                    <SmCard
                      title="El paraiso"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <LgCard
                      title="Valle del Cauca"
                    />
                  </div>
                  <div className="col-md-6">
                    <LgCard
                      title="Aguas Termales"
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}