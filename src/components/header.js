import React from "react";
import Parser from "html-react-parser";

import data from "../data";

import "./header.css";
import BlueButton from "./blue-button";

const Header = () => (
    <header>
        <div className="header-image-div">
            <img src={'header-img.png'} alt="" />
        </div>
        <div className="header-text-div">
            <h1>{Parser(data.header.title)}</h1>

            <p>{Parser(data.header.subtitle)}</p>

            <BlueButton text="Learn more"></BlueButton>
        </div>
    </header>
);

export default Header;