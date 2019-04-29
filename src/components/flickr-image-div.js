import React from "react";
import "./flickr-image-div.css";

const FlickrImageDiv = ({data}) => (
    <div className="flickr-image-div">
        <img src={data.src} alt={data.alt}/>
    </div>
);

export default FlickrImageDiv;