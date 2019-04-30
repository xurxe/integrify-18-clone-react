import React from "react";
import Parser from "html-react-parser";

import "./bottom-div.css";

import WhiteButton from "./white-button";

const BottomDiv = ({item}) => (
    <div id="bottom-div">
        <h2>
            {Parser(item.title)}
        </h2>
        <WhiteButton item={item.button}></WhiteButton>
    </div>
)

export default BottomDiv;