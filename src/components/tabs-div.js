import React from "react";

import "./tabs-div.css";
import data from "../data";

import TabDiv from "./tab-div";

const TabsDiv = () => (
    <div className="tabsDiv">
        {data.section4.content.map(
            (item) => <TabDiv key={item.key} item={item}></TabDiv>)
        }
    </div>
);

export default TabsDiv;