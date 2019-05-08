import React from 'react';

import './blog-link.css';

const BlogLink = ({item}) => (
    
    <div>
        <a 
        className='blog-link'
        href={item.url}>
        
            {item.title}
            
        </a>
        
        <hr />
    </div>
);

export default BlogLink;