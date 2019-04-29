import React from "react";

import "./blog-link.css";

const BlogLink = ({data}) => (
    <div>
        <a href={data.url} className="blog-link">
            {data.title}
        </a>
        
        <hr />
    </div>
);

export default BlogLink;