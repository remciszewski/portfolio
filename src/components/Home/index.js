import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Dzien dobry, <br />
                <span>Jestem Remigiusz</span>
                </h1>
                <h2>Głaskam sra jak psa 🥸💩</h2>
                <Link to='/contact' className='flat-button'>skontaktuj sie ze mnom</Link>
            </div>
        </div>
    );
}

export default Home