import React from 'react';
import './testimonial-div.css';

const TestimonialDiv = ({item}) => (
    
    <div 
    className='testimonial-div'>

        <h5>
            {item.name}
        </h5>
        
        <p>
            &ldquo;{item.content}&rdquo;
        </p>
        
    </div>
);

export default TestimonialDiv;