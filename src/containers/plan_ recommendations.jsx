import React, {Component} from 'react';
import CardLg from '../components/LgCardPlanRecommendations/card';
import CardSm from '../components/SmCardPlanRecommendations/card';
import ImagenCardLg from '../components/LgCardPlanRecommendations/images/religiosas.png';
import ImagenCardSm1 from '../components/SmCardPlanRecommendations/images/ecologico.png';
import ImagenCardSm2 from '../components/SmCardPlanRecommendations/images/cali.png';

export default class PlanRecommendations extends Component{
  render(){
    return(
      <div className="section__home-plan-recommendations">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="container-title">
                <span className="title_plan">planes y</span>
                <span className="title_recommendations">RECOMENDACIONES</span>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-7">
              <CardLg
                id={1}
                Ptitle="Un tour de arquitectura y cultura"
                Stitle="CIUDADES"
                Ttitle="religiosas"
                image={ImagenCardLg}
              />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <CardSm
                    id={1}
                    Ptitle="Un paraiso del Valle"
                    Stitle="TURISMO"
                    Ttitle="ecologico"
                    alignText = "text-center"
                    image={ImagenCardSm1}
                  />
                  <br/>
                </div>
                <div className="col-md-12">
                  <CardSm
                    id={2}
                    Ptitle="conoce cali y su salsa"
                    Stitle="Mira"
                    Ttitle="ve!"
                    alignText= "text-right"
                    image={ImagenCardSm2}
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