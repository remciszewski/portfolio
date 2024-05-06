import './index.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' R', 'e', 'm', 'i', 'g', 'i', 'u', 's', 'z']

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Dzien dobry, <br />
                <span>Jestem </span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={20} />
                </h1>
                <h2>Głaskam sra jak psa 🥸💩</h2>
                <Link to='/contact' className='flat-button'>skontaktuj sie ze mnom</Link>
            </div>
        </div>
    );
}

export default Home