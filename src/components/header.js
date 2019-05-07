import React from "react";
import Parser from "html-react-parser";

import "./header.css";
import data from "../data";

import BlueButton from "./blue-button";

const {img, alt, title, subtitle, button} = data.header;

const Header = () => (
    <header>

        <div 
        className="header-image-div">

            <img 
            src={img} 
            alt={alt} />

        </div>

        <div 
        className="header-text-div">

            <h1>
                {Parser(title)}
            </h1>

            <p>
                {Parser(subtitle)}
            </p>

            <BlueButton 
            item={button}>
            </BlueButton>
            
        </div>
    </header>
);

export default Header;