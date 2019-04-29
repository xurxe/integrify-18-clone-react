import React from "react";
import Parser from "html-react-parser";

import "./tweet-p.css";

const TweetP = ({data}) => (
    <p className="tweet-p">
        <b>{data.username} </b> {Parser(data.content)} 
        <br /> 
        <span className="smaller-italic">about <b> {data.timestamp}</b></span>
    </p>
);

export default TweetP;