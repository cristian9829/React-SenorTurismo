import React, {Component} from 'react';
import CardCategories from '../components/CardCategories/card';
import imagen1 from '../components/CardCategories/imagen1/imagen1.png';
import imagen2 from '../components/CardCategories/imagen2/imagen2.png';
import imagen3 from '../components/CardCategories/imagen3/imagen3.png';

export default class Categories extends Component{
  render(){
    return(
      <div className="section__home-categories">  
        <div className="container">
          <div className="row">
            <h1>CATEGORIAS</h1>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-3">
              <CardCategories
                id={1}
                title="SAN CIPRIANO"
                image = {imagen1}
              />
            </div>
            <div className="col-md-3">
              <CardCategories
                id={2}
                title="LAGO CALIMA"
                image={imagen2}
              />
            </div>
            <div className="col-md-3">
              <CardCategories
                id={3}
                title="Parque del Cafè"
                image={imagen3}
              />
            </div>
            <div className="col-md-3">
              <CardCategories
                id={4}
                title="SAN CIPRIANO"
                image="https://vulcanopro.s3.amazonaws.com/images/lar_sp7y6XijJgkQ6mI8dHfGWeVMA8KQXogaIZslLPAs.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}