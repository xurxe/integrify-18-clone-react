import React from "react";
import Parser from "html-react-parser";

import "./top-div.css";
import WhiteButton from "./white-button";

const TopDiv = ({item}) => (
    <div id="top-div">
        <h2>
            {Parser(item.title)}
        </h2>
        <WhiteButton item={item.button}></WhiteButton>
    </div>
);

export default TopDiv;