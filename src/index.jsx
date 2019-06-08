import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import style from './assets/aplication.scss';
import 'bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './views/aplication/nav.jsx';
import Footer from './views/aplication/footer.jsx';
import Home from './views/home/Home.jsx';

class App extends Component {
  render(){
    return(
      <Router>
        <Nav
          styles="bg-nav nav-dark"
          effect_nav="bg-white nav-light"
          color="navbar-light"
          scroll= {100}
        />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer/>
      </Router>
    )
  }
}

ReactDOM.render (<App/>, document.getElementById('app'))