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
                      id={1}
                      title="buga"
                      image="https://files.lafm.com.co/assets/public/styles/image_631x369/public/2018-06/calilafm_1_0.jpg?itok=xcyeEQgy"
                    />
                    <br/>
                  </div>
                  <div className="col-md-12">
                    <SmCard
                      id={2}
                      title="el paraiso"
                      image="https://www.livevalledelcauca.com/assets2018/images/el-cerrito/hacienda-el-paraiso.jpg"
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
                      image="https://i.ytimg.com/vi/IcuwDnXI0tQ/maxresdefault.jpg"
                    />
                  </div>
                  <div className="col-md-6">
                    <LgCard
                      id={2}
                      Ptitle="AGUAS"
                      Stitle="Termales"
                      image="https://quierocuidarme.dkvsalud.es/sites/default/files/styles/vivelasalud_ficha_825x464/public/imagen/2018-08/aguas-termales_0.jpg?itok=XA5m8QkV"
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