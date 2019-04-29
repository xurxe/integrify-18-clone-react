import React from "react";
import "./tab-div.css";
import BlueButton from "./blue-button";

const TabDivDefaultChecked = (props) => (
    <div className="tab">
        <input name="checkbox-tabs-group" type="radio" id={props.id} className="checkboxtab" defaultChecked />
        <label htmlFor={props.id}>{props.title}</label>
        <div className="content">
            <h5>
                {props.h5}
            </h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quibusdam veritatis expedita, eum temporibus inventore voluptatibus sint praesentium?
            </p>
            <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapiente eveniet nulla ullam, architecto sed laudantium facere officia magnam magni."
            </p>
            <BlueButton text="Learn more"></BlueButton>
        </div>
    </div>
);

export default TabDivDefaultChecked;