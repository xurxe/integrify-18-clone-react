import React from "react";
import "./header.css";
import BlueButton from "./blue-button";

const Header = () => (
    <header>
        <div className="header-image-div">
            <img src={'header-img.png'} alt="" />
        </div>
        <div className="header-text-div">
            <h1>
                <em>Powerfully simple</em>&#8196;with a <br />
                <em>squeeky clean</em>&#8196;design.
            </h1>

            <p>
                Find out how you can offer quick and powerful <br />
                solutions to your customers now!
            </p>

            <BlueButton text="Learn more"></BlueButton>
        </div>
    </header>
);

export default Header;