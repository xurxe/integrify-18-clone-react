import React from 'react';

import './blog-div.css';

const BlogDiv = ({item}) => (
    
    <a 
    className='blog-div' 
    href={item.url}>

        <div 
        className='blog-thumbnail-div'>

            <img 
            className='blog-thumbnail-img' 
            src={item.img} 
            alt={item.alt} 
            />

        </div>

        <div 
        className='blog-snippet-div'>

            <h5>
                {item.title}
            </h5>

            <p>
                {item.content}
            </p>
            
        </div>
    </a>
);

export default BlogDiv;