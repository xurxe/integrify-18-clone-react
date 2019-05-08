import React from 'react';
import Parser from 'html-react-parser';

import './bottom-div.css';
import data from '../data';

import WhiteButton from './white-button';

const {title, button} = data.bottom;

const BottomDiv = () => (
    
    <div 
    id='bottom-div'>

        <h2>
            {Parser(title)}
        </h2>
        
        <WhiteButton 
        item={button}>
        </WhiteButton>
        
    </div>
);

export default BottomDiv;