import React from "react";
import "./title-div.css";

const TitleDiv = ({title}) => (
    <div className="title-div">
        <div className="stripes"></div>
        <h4>{title}</h4>
        <div className="stripes"></div>
    </div>
);

export default TitleDiv;