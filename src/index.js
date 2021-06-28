import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home';
import Tutorial from './components/Tutorial';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './scss/app.scss';
import 'bulma';



class MainWrap extends React.Component {

  render() {
    return <Router basename="/mernIntro">
             <Header/>
             <div className="container">
               <Route
                      exact
                      path="/"
                      component={ Home } />
               <Route
                      path="/tutorial"
                      component={ Tutorial } />
             </div>
           </Router>
  }
}

let App = document.getElementById("app");

ReactDOM.render(<MainWrap/>, App);