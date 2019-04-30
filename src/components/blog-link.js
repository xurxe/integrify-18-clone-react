import React from "react";

import "./blog-link.css";

const BlogLink = ({item}) => (
    <div>
        <a href={item.url} className="blog-link">
            {item.title}
        </a>
        
        <hr />
    </div>
);

export default BlogLink;