import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood';
const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist</p>
                    <link to="/booking"><button aria-label='On Click'>Book Now!</button></link>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt='Banner Image' />
                </div>
            </section>
        </header>
    );
};