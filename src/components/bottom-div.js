import React from "react";
import Parser from "html-react-parser";

import "./bottom-div.css";

import WhiteButton from "./white-button";

const BottomDiv = ({data}) => (
    <div id="bottom-div">
        <h2>
            {Parser(data.title)}
        </h2>
        <WhiteButton data={data.button}></WhiteButton>
    </div>
)

export default BottomDiv;