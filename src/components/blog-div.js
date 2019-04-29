import React from "react";

import "./blog-div.css";

const BlogDiv = ({data}) => (
    <a href={data.url} className="blog-div">
        <div className="blog-thumbnail-div">
            <img className="blog-thumbnail-img" src={data.img} alt={data.alt} />
        </div>
        <div className="blog-snippet-div">
            <h5>
                {data.title}
            </h5>
            <p>
                {data.content}
            </p>
        </div>
    </a>
);

export default BlogDiv;