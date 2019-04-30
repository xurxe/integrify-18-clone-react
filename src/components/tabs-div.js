import React from "react";
import Parser from "html-react-parser"

import "./tabs-div.css";
import data from "../data";

import BlueButton from "./blue-button";

const showTab = (event) => {
    const tabs = document.querySelectorAll('.tab-div-tab');
    const contents = document.querySelectorAll('.tab-div-content');
    const selectedTab = event.target;

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('selected');
        contents[i].classList.remove('selected');
        if (selectedTab.classList.contains(i)) {
            tabs[i].classList.add('selected');
            contents[i].classList.add('selected');
        };
    };
};

const TabDivTabs = ({items}) => (
    <div className="tab-div-tabs">
        {items.map(
            (item) => <button className={"tab-div-tab " + item.key + ' ' + item.class} key={item.key} onClick={showTab}>{item.tab}</button>
        )}
    </div>
);

const TabDivContent = ({item}) => (
    <div className={"tab-div-content " + item.key + ' ' + item.class}>
        <div>
            <h5>
                {item.title}
            </h5>
            {Parser(item.content)}
        </div>
        
        <BlueButton item={data.header.button}></BlueButton> {/* fix */}
    </div>
);

const TabsDiv = () => (
    <div className="tabs-div">
        <TabDivTabs items={data.section4.content}></TabDivTabs>
        
        <div className="tab-div">
            {data.section4.content.map(
                (item) => <TabDivContent key={item.key} item={item}></TabDivContent>)
            }
        </div>

    </div>
);

export default TabsDiv;