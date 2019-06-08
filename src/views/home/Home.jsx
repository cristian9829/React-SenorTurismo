import React, {Component} from 'react';
import Hero from '../../containers/hero';
import PlanRecommendations from '../../containers/plan_ recommendations';
import Categories from '../../containers/categories';
import Destinations from '../../containers/destinations';

export default class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Hero/>
        <PlanRecommendations/>
        <Categories/>
        <Destinations/>
      </React.Fragment> 
    )
  }
}