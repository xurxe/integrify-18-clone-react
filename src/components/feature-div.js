import React from "react";
import Parser from "html-react-parser"

import "./feature-div.css";

import ReadMoreButton from "./read-more-button";

const FeatureDiv = ({data}) => (
    <div className="feature-div">
        <div className="icon-div">
            <div className="circle-div"> 
                {Parser(data.img)} 
            </div>
        </div>

        <h3> 
            {Parser(data.title)}
        </h3>

        <p>
            {data.content}
        </p>

        <ReadMoreButton data={data.button}></ReadMoreButton>
    </div>
);

export default FeatureDiv;