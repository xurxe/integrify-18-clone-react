import React from "react";
import "./info-div.css";
import TweetP from "./tweet-p";
import BlogLink from "./blog-link";
import FlickrImageDiv from "./flickr-image-div";

const InfoDiv = (props) => (
    <div id="info-div">
        <div className="about-div">
            <h5>ABOUT US</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores non praesentium quasi. Quae, quod.</p>
            <p>123 Street Name <br />Road Name <br />London <br />+44 7419 13807</p>   
        </div>

        <div className="tweets-div">
            <h5>LATEST TWEETS</h5>
            <TweetP username="@Jainesh" text="Just submitted another great item on" hashtag="#themeforest" time="3 hours ago"></TweetP>
            <TweetP username="@Jainesh" text="Working on an awesome theme for" hashtag="#themeforest" time="3 weeks ago"></TweetP>
        </div>
        <div className="posts-div">
            <h5>LATEST POSTS</h5>
            <BlogLink text="Lorem ipsum dolor sit amet, consect"></BlogLink>
            <hr />
            <BlogLink text="Sea do elusmad tempor incididunt"></BlogLink>
            <hr />
            <BlogLink text="Ut labore et dolare magnar sea do elusmad tempor"></BlogLink>
            <hr />
            <BlogLink text="Consectetur incididunt elt, sea do"></BlogLink>
        </div>
        <div className="flickr-div">
            <h5>FLICKR</h5>
            <div className="flickr-image-grid">
                <FlickrImageDiv></FlickrImageDiv>
                <FlickrImageDiv></FlickrImageDiv>
                <FlickrImageDiv></FlickrImageDiv>
                <FlickrImageDiv></FlickrImageDiv>
                <FlickrImageDiv></FlickrImageDiv>
                <FlickrImageDiv></FlickrImageDiv>
                <FlickrImageDiv></FlickrImageDiv>
                <FlickrImageDiv></FlickrImageDiv>
            </div>
        </div>
    </div>
);

export default InfoDiv;