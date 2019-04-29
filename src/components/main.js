import React from "react";
import "./main.css";
import FeatureDiv from "./feature-div";
import BlogDiv from "./blog-div";
import TestimonialDiv from "./testimonial-div";
import TitleDiv from "./title-div";
import TabsDiv from "./tabs-div";

const Main = () => (
    <main>
        <div id="mainA" className="content1">
            <FeatureDiv title1="Superbly" title2="responsive">
                <i className="fas fa-mobile-alt"></i>
            </FeatureDiv>

            <FeatureDiv title1="Squeeky" title2="clean">
                <i className="fas fa-desktop"></i>
            </FeatureDiv>

            <FeatureDiv title1="Multi" title2="purpose">
                <i className="fas fa-laptop"></i>
            </FeatureDiv>

            <FeatureDiv title1="Highly" title2="flexible">
                <i className="fas fa-recycle"></i>
            </FeatureDiv>
        </div>

        <div id="mainB" className="title2">
            <TitleDiv title="Recent work"></TitleDiv>
        </div>

        <div id="mainC">
            <div className="content2">
                <BlogDiv title="Blogitty">
                </BlogDiv>

                <BlogDiv title="Blogus">
                </BlogDiv>

                <BlogDiv title="Blogarino">
                </BlogDiv>

            </div>

            <div className="title3">
                <TitleDiv title="Testimonials">
                </TitleDiv>
            </div>

            <div className="content3">
                <TestimonialDiv name="Jane Doe">
                </TestimonialDiv>

                <TestimonialDiv name="Fulano de Tal">
                </TestimonialDiv>

                <TestimonialDiv name="Maija Meikäläinen">
                </TestimonialDiv>

                <TestimonialDiv name="Nisse i Hökarängen">
                </TestimonialDiv>
            </div>

            <div className="title4">
                <TitleDiv title="Development">
                </TitleDiv>
            </div>
            
            <div className="content4">
                <TabsDiv></TabsDiv>
            </div>
        </div>
    </main>
);

export default Main;