import React, {Component} from 'react';
import Hero from '../../containers/hero';
import PlanRecommendations from '../../containers/plan_ recommendations';

export default class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Hero/>
        <PlanRecommendations/>
      </React.Fragment> 
    )
  }
}