import React, {Component} from 'react';
import CardLg from '../components/LgCardPlanRecommendations/card';
import CardSm from '../components/SmCardPlanRecommendations/card';

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
                Ptitle="Un tour de arquitectura y cultura"
                Stitle="CIUDADES"
                Ttitle="religiosas"
              />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <CardSm
                    Ptitle="Un paraiso del Valle"
                    Stitle="TURISMO"
                    Ttitle="ecologico"
                    alignText = "text-center"
                  />
                  <br/>
                </div>
                <div className="col-md-12">
                  <CardSm
                    Ptitle="conoce cali y su salsa"
                    Stitle="Mira"
                    Ttitle="ve!"
                    alignText= "text-right"
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