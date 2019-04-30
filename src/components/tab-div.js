import React from "react";
import Parser from "html-react-parser"

import "./tab-div.css";
import data from "../data";

import BlueButton from "./blue-button";

const TabDiv = ({item}) => (
    <div className="tabDiv">
        <button className="tabDivButton" type="button" /* onClick={showTab(event)} */ >{item.tab}</button>
        <div className="tabDivContent">
            <h5>
                {item.title}
            </h5>
            {Parser(item.content)}
            
            <BlueButton item={data.header.button}></BlueButton> {/* fix */}
        </div>
    </div>
);

export default TabDiv;