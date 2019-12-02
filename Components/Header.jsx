import React from 'react';

const Header = () => {
    return (
        <header className="header">
		<nav className="nav">
			<div className="logo">
				<p>Graff <font>blue</font></p>
			</div>
			<div className="nav-items">
				<a href="#!">Home</a>
				<a href="#!">About us</a>
				<a href="#!">Services</a>
				<a href="#!">Contact</a>
				<div className="login">
					<a href="#!">Login</a>
				</div>
			</div>	
		</nav>
		<div className="text">
			<h1>WELCOME TO PINK</h1>
			<p>A multi purpose theme from Hello</p>
		</div>
	</header>
    );
    }
export default Header;