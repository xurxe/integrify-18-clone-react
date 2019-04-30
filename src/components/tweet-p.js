import React from "react";
import Parser from "html-react-parser";

import "./tweet-p.css";

const TweetP = ({item}) => (
    <p className="tweet-p">
        <b>
            {item.username}
        </b>
        
        {Parser(item.content)} 

        <br /> 
        <span className="smaller-italic">
            about
            <b>
                {item.timestamp}
            </b>
        </span>
    </p>
);

export default TweetP;