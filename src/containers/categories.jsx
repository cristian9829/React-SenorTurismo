import React, {Component} from 'react';
import CardCategories from '../components/CardCategories/card';

export default class Categories extends Component{
  render(){
    return(
      <div className="section__home-categories">  
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>CATEGORIAS</h1>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-3">
              <CardCategories/>
            </div>
            <div className="col-md-3">
              <CardCategories/>
            </div>
            <div className="col-md-3">
              <CardCategories/>
            </div>
            <div className="col-md-3">
              <CardCategories/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}