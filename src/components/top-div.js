import React from "react";
import Parser from "html-react-parser";

import "./top-div.css";
import WhiteButton from "./white-button";

const TopDiv = ({data}) => (
    <div id="top-div">
        <h2>
            {Parser(data.title)}
        </h2>
        <WhiteButton data={data.button}></WhiteButton>
    </div>
);

export default TopDiv;