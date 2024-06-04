import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br />
                <span>My name's Remigiusz</span>
                </h1>
                <h2>H2 Placeholder</h2>
                <Link to='/contact' className='flat-button'>Contact me here</Link>
            </div>
        </div>
    );
}

export default Home