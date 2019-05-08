import React from 'react';
import Parser from 'html-react-parser';

import './top-div.css';
import data from '../data';

import WhiteButton from './white-button';

const {title, button} = data.bottom;

const TopDiv = () => (
    
    <div 
    id='top-div'>

        <h2>
            {Parser(title)}
        </h2>
        
        <WhiteButton 
        item={button}>
        </WhiteButton>
        
    </div>
);

export default TopDiv;