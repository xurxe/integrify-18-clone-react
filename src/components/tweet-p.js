import React from "react";
import "./tweet-p.css";

const TweetP = (props) => (
    <p className="tweet-p">
        <b>{props.username} </b> 
        {props.text} 
        <b> {props.hashtag}</b> 
        <br /> 
        <span className="smaller-italic">about 
            <b> {props.time}</b>
        </span>
    </p>
);

export default TweetP;