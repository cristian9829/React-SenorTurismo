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
              <h1><span className="text-warning">Planes y</span><br/> Recomendaciones</h1>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-7">
              <CardLg
                Ptitle="Un tour de arquitectura y cultura"
                Stitle="ciudades"
                Ttitle="Religiosas"
              />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <CardSm
                    Ptitle="Conoce Cali y su salsa"
                    Stitle="Mira Ve"
                    alignText = "text-center"
                  />
                  <br/>
                </div>
                <div className="col-md-12">
                  <CardSm
                    Ptitle="Un tour de arquitectura y cultura"
                    Stitle="ciudades"
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