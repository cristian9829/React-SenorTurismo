import React, {Component} from 'react';
import SmCard from '../components/SmCardDestionations/card';
import LgCard from '../components/LgCardDestinations/card';
import Image1CardLg from '../components/LgCardDestinations/images/image1.png';
import Image2CardLg from '../components/LgCardDestinations/images/image2.png';
import Image1CardSm from '../components/SmCardDestionations/images/imagen1.png';
import Image2CardSm from '../components/SmCardDestionations/images/imagen2.png';

export default class Destinations extends Component{
  render(){
    return(
      <div className="section__home-destinations">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-destinations">NUESTROS DESTINOS</h1>
            </div>
          </div>
          <br/>
          <div className="row">
          
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12">
                    <SmCard
                      id={1}
                      title="buga"
                      image={Image1CardSm}
                    />
                    <br/>
                  </div>
                  <div className="col-md-12">
                    <SmCard
                      id={2}
                      title="el paraiso"
                      image={Image2CardSm}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <LgCard
                      id={1}
                      Ptitle="VALLE DEL"
                      Stitle="Cauca"
                      image={Image2CardLg}
                    />
                  </div>
                  <div className="col-md-6">
                    <LgCard
                      id={2}
                      Ptitle="AGUAS"
                      Stitle="Termales"
                      image={Image1CardLg}
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