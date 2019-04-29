import React from "react";
import "./tabs-div.css";
import TabDiv from "./tab-div";
import TabDivDefaultChecked from "./tab-div--defaultChecked";

const TabsDiv = (props) => (
    <div className="tabs">
        <TabDivDefaultChecked id="checkbox1" title="Design" h5="The Design">
        </TabDivDefaultChecked>

        <TabDiv id="checkbox2" title="Production" h5="The Production">
        </TabDiv>
    </div>
);

export default TabsDiv;