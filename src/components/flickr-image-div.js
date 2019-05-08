import React from 'react';
import './flickr-image-div.css';

const FlickrImageDiv = ({item}) => (
    
    <div 
    className='flickr-image-div'>

        <img 
        src={item.src} 
        alt={item.alt} 
        />
        
    </div>
);

export default FlickrImageDiv;