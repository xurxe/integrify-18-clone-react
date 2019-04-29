import React from "react";
import "./blog-link.css";

const BlogLink = (props) => (
    <a href="/" className="blog-link">
        {props.text}
    </a>
);

export default BlogLink;