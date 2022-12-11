import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'

import './index.css';

import Header from './components/Homepage';
import GenerateRoot from './components/Categories';




function Cashio() {

    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {        
        setIsActive(current => !current);
    };
    return (
        <div>
            <Header />
            <GenerateRoot/>
        </div>
        )
}

ReactDOM.render( 
        <Cashio />,

    document.getElementById('root')
);

