import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Blogs = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
    .then(posts => setPosts(posts.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <div className="max-w-[1200px] mx-auto mt-8">
        {posts.map((post) => (
          
          <Link to={`post/${post._id}`} key={post._id}>
            <div className="flex justify-center p-4 mb-4 space-x-6 border">
              <img
                src={`http://localhost:3001/Images/${post.file}`}
                alt=""
                className="object-cover w-[20%]"
              />
              <div className="flex-1">
                <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
                <p className="text-lg">{post.description}</p>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs
