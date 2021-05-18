import React from "react";
import {Link} from "react-router-dom"


function BlogCard(props) {
  const createdAt = new Date(props.createdAt)
  return (
      <div className="col-start-2 col-end-10 break-words rounded overflow-hidden bg-gray-600 shadow-lg mb-4 hover:bg-gray-700">
      <Link to={{pathname:"/blog/" + props.id, post: props.post}}>
        <div className="p-4">
          <h1 className="text-xl font-roboto-slab">{props.title}</h1>
          <p className="pb-2">{createdAt.toLocaleDateString()}</p>
          <p >{props.description}</p>
        </div>
      </Link>
      </div>
  )
}


export default BlogCard;
