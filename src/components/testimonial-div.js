import React from "react";
import "./testimonial-div.css";

const TestimonialDiv = ({data}) => (
    <div className="testimonial-div">
        <h5>
            {data.name}
        </h5>
        <p>
            &ldquo;{data.content}&rdquo;
        </p>
    </div>
);

export default TestimonialDiv;