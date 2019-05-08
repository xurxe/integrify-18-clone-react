import React from 'react';

import './blue-button.css';

const BlueButton = ({item}) => (
    
    <a 
    className='blue-button'
    href={item.url}>

        {item.text}
        
    </a>
);

export default BlueButton;