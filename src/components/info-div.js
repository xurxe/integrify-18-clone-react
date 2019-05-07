import React from "react";
import Parser from "html-react-parser";

import "./info-div.css";
import data from "../data";

import TweetP from "./tweet-p";
import BlogLink from "./blog-link";
import FlickrImageDiv from "./flickr-image-div";

const InfoDiv = () => (
    <div id="info-div">
        <div className="about-div">
            <h5>
                {data.aboutUs.title}
            </h5>

            <p>
                {data.aboutUs.content.description}
            </p>

            <p>
                {Parser(data.aboutUs.content.address)}
            </p>   
        </div>

        <div className="tweets-div">
            <h5>
                {data.latestTweets.title}
            </h5>

            {data.latestTweets.content.map(
                (item) => <TweetP key={item.id} item={item}></TweetP>
            )}
        </div>
        <div className="posts-div">
            <h5>
                {data.latestPosts.title}
            </ h5>

            {data.latestPosts.content.map(
                (item) => <BlogLink key={item.id} item={item}></BlogLink>
            )}
        </div>
        <div className="flickr-div">
            <h5>
                {data.flickr.title}
            </h5>

            <div className="flickr-image-grid">

            {data.flickr.content.map(
                (item) => <FlickrImageDiv key={item.id} item={item}></FlickrImageDiv>
            )}
            </div>
        </div>
    </div>
);

export default InfoDiv;