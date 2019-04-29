import React from "react";
import "./feature-div.css";
import ReadMoreButton from "./read-more-button";

const FeatureDiv = (props) => (
    <div className="feature-div">
        <div className="icon-div">
            <div className="circle-div">
                {props.children}
            </div>
        </div>

        <h3><b>{props.title1}</b> {props.title2}</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ullam vel consequuntur accusantium, asperiores.</p>

        <ReadMoreButton></ReadMoreButton>
    </div>
);

export default FeatureDiv;