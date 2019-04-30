import React from "react";
import Parser from "html-react-parser"

import "./feature-div.css";

import ReadMoreButton from "./read-more-button";

const FeatureDiv = ({item}) => (
    <div className="feature-div">
        <div className="icon-div">
            <div className="circle-div"> 
                {Parser(item.img)} 
            </div>
        </div>

        <h3> 
            {Parser(item.title)}
        </h3>

        <p>
            {item.content}
        </p>

        <ReadMoreButton item={item.button}></ReadMoreButton>
    </div>
);

export default FeatureDiv;