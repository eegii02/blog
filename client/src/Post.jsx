import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "./App";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const user = useContext(userContext);
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/getpostbyid/" + id)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deletepost/" + id)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" mt-10 flex max-w-[1000px] mx-auto">
      <div className="flex flex-col flex-1 ">
        <img
          src={`http://localhost:3001/Images/${post.file}`}
          alt=""
          className="h-[600px] object-cover "
        />
        <h2 className="my-3 text-2xl font-semibold text-center">
          {post.title}
        </h2>
        <p className="text-lg">{post.description}</p>
        <div className="flex space-x-8 ">
          {
            user.email === post.email ? <> <Link to={`/editpost/${post._id}`}>
            <button className="px-6 py-2 mt-4 font-semibold text-white bg-green-500 rounded-md">
              Edit
            </button>
          </Link>

          <button
            onClick={(e) => handleDelete(post._id)}
            className="px-6 py-2 mt-4 font-semibold text-white bg-red-500 rounded-md"
          >
            Delete
          </button></> : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Post;
