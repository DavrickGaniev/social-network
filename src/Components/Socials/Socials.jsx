import React from 'react';
import s from './Socials.module.css';

const Socials = () => {
    return (
        <section className={s.socials}>
		<h1>Lorem Ipsum is simply dummy </h1>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
		<div className={s.social_items}>
			<span>Tickets</span>
			<span>Camera</span>
			<span>Beer</span>
			<span>Devices</span>
		</div>
	</section>
    );
    }
export default Socials;