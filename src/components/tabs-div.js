import React from 'react';
import Parser from 'html-react-parser';

import './tabs-div.css';
import data from '../data';

import BlueButton from './blue-button';

const TabDivTabs = ({items}) => (
    
    <div 
    className='tab-div-tabs'>

        {items.map(
            (item) => (
                <button 
                className={'tab-div-tab ' + item.class}
                key={item.id}
                id={item.id}
                onClick={showTab}>
                    {item.tab}
                </button>
            )
        )}
    </div>
);

const TabDivContent = ({item}) => (
    <div 
    className={'tab-div-content '  + item.class}>

        <div>
            <h5>
                {item.title}
            </h5>

            {Parser(item.content)}
        </div>
        
        <BlueButton 
        item={data.header.button}>
        </BlueButton>

    </div>
);

const TabsDiv = () => (
    <div 
    className='tabs-div'>

        <TabDivTabs 
        items={data.section4.content}>
        </TabDivTabs>
        
        <div 
        className='tab-div'>

            {data.section4.content.map(
                (item) => (
                    <TabDivContent 
                    key={item.id} 
                    item={item}>
                    </TabDivContent>
                )
            )}
        </div>
    </div>
);


const showTab = (event) => {

    // select all tabTabs
    const tabs = document.querySelectorAll('.tab-div-tab');

    // select all tabContents
    const contents = document.querySelectorAll('.tab-div-content');

    // select active tab
    const activeTab = event.target;

    // loop
    for (let i = 0; i < tabs.length; i++) {

        // remove active from all tabs and contents
        tabs[i].classList.remove('active');
        contents[i].classList.remove('active');

        // give active class to selected content
        if (tabs[i].id === activeTab.id) {
            tabs[i].classList.add('active');
            contents[i].classList.add('active');
        };
    };

    return;
};

export default TabsDiv;