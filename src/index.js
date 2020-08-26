import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home';
import Tutorial from './components/Tutorial';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './scss/app.scss';
import 'bulma';
import Logo from "./img/mernLogo.svg";


class MainWrap extends React.Component {
    render() {
        return <Router basename="/mernIntro">
			
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item">
							<img width="120" src={Logo} alt=""/>
						</Link>
					</div>
					<Link to="/tutorial" className="navbar-item">Tutorial</Link>
				</nav>
			

            <div className="container">
                <h1>Hello</h1>

            	<Route exact path="/" component={Home} />
            	<Route path="tutorial" component={Tutorial} />                
            </div>
        </Router>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<MainWrap/>, App);