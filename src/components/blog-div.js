import React from "react";
import "./blog-div.css";

const BlogDiv = (props) => (
    <a href="/" className="blog-div">
        <div className="blog-thumbnail-div"></div>
        <div className="blog-snippet-div">
            <h5>{props.title}</h5>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, iusto dicta exercitationem laudantium quibusdam...
            </p>
        </div>
    </a>
);

export default BlogDiv;