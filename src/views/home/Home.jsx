import React, {Component} from 'react';
import Hero from '../../containers/hero';
import PlanRecommendations from '../../containers/plan_ recommendations';
import Categories from '../../containers/categories';

export default class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Hero/>
        <PlanRecommendations/>
        <Categories/>
      </React.Fragment> 
    )
  }
}