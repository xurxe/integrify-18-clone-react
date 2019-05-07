import React from "react";

import "./main.css";
import data from "../data";

import FeatureDiv from "./feature-div";
import BlogDiv from "./blog-div";
import TestimonialDiv from "./testimonial-div";
import TitleDiv from "./title-div";
import TabsDiv from "./tabs-div";

const Main = () => (
    <main>
        <div 
        id="mainA" 
        className="content1">
        
            {data.section1.content.map(
                (item) => (
                    <FeatureDiv 
                    key={item.id} 
                    item={item}>
                    </FeatureDiv>
                )
            )}
        </div>

        <div 
        id="mainB" 
        className="title2">

            <TitleDiv 
            title={data.section2.title}>
            </TitleDiv>

        </div>

        <div 
        id="mainC">

            <div 
            className="content2">

                {data.section2.content.map(
                    (item) => (
                        <BlogDiv 
                        key={item.id} 
                        item={item}>
                        </BlogDiv>
                    )
                )}

            </div>

            <div 
            className="title3">

                <TitleDiv 
                title={data.section3.title}>
                </TitleDiv>

            </div>

            <div 
            className="content3">

                {data.section3.content.map(
                    (item) => (
                        <TestimonialDiv 
                        key={item.id} 
                        item={item}>
                        </TestimonialDiv>
                    )
                )}

            </div>

            <div 
            className="title4">
                <TitleDiv 
                title={data.section4.title}>
                </TitleDiv>
            </div>
            
            <div 
            className="content4">
                <TabsDiv></TabsDiv>
            </div>
        </div>
    </main>
);

export default Main;