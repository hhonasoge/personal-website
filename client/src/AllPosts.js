import React from "react";
import {useState} from "react"
import BlogCard from "./BlogCard.js"


function AllPosts(props) {

  const [data, setData] = useState()

  React.useEffect(() => {
    fetch("/api/blog")
    .then((res) => res.json())
    .then((data) => setData(data.message))
    .catch(console.error);
  }, []);

  return (
      <div>
        {(data) ? data.map((post) => (
          <div key={post._id} className="cards lg:ml-5 ">
            <BlogCard
              key={post._id}
              id={post._id}
              post={post}
              title={post.title}
              description={post.description}
              createdAt={new Date(post.createdAt).toLocaleDateString()}
              body={post.body} />
            </div>
        )) : "Loading blog posts..."}
      </div>
    )
}


export default AllPosts;
