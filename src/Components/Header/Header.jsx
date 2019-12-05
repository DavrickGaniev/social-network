import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
		<nav className={h.nav}>
			<div className={h.logo}>
				<p>Graff <font>blue</font></p>
			</div>
			<div className={h.nav_items}>
				<a href="#!">Home</a>
				<a href="#!">About us</a>
				<a href="#!">Services</a>
				<a href="#!">Contact</a>
				<div className={h.login}>
					<a href="#!">Login</a>
				</div>
			</div>	
		</nav>
		<div className={h.text}>
			<h1>WELCOME TO PINK</h1>
			<p>A multi purpose theme from Hello</p>
		</div>
	</header>
    );
    }
export default Header;