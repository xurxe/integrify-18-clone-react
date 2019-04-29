import React from "react";
import "./testimonial-div.css";

const TestimonialDiv = (props) => (
    <div className="testimonial-div">
        <h5>{props.name}</h5>
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus, sunt excepturi placeat maxime autem voluptatibus necessitatibus exercitationem."
        </p>
    </div>
);

export default TestimonialDiv;