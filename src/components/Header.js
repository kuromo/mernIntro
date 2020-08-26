import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../img/mernLogo.svg";

class Header extends React.Component {
	 render() { return (





		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<Link to="/" className="navbar-item">
					<img width="120" src={Logo} alt=""/>
				</Link>

				<a role="button" className="navbar-burger burger nav-toggle" aria-label="menu" aria-expanded="false" data-target="mainNavbar"
				onClick={() => { let toggle = document.querySelector(".nav-toggle"); let menu = document.querySelector(".navbar-menu"); toggle.classList.toggle("is-active"); menu.classList.toggle("is-active"); }}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="mainNavbar" className="navbar-menu">
				<div className="navbar-start">
					<Link to="/tutorial" className="navbar-item">Tutorial</Link>
				</div>

				<div className="navbar-end">
					<Link to="/" className="navbar-item">
						endItem
					</Link>
					
				</div>
			</div>
		</nav>

	)}
}

export default Header