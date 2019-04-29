import React from "react";
import "./title-div.css";

const TitleDiv = (props) => (
    <div className="title-div">
        <div className="stripes"></div>
        <h4>{props.title}</h4>
        <div className="stripes"></div>
    </div>
);

export default TitleDiv;