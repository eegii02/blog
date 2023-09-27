import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/editpost/${id}`, {
        title,
        description,
      })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getpostbyid/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]); // Added 'id' as a dependency to re-fetch data when 'id' changes.

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[500px] p-6 border">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <h2 className="text-xl mb-4 font-semibold">Update Post</h2>
          <input
            type="text"
            className="border p-1 rounded-md"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            id="desc"
            cols="30"
            rows="10"
            value={description}
            className="border rounded-md p-1"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="bg-green-500 w-full py-2 mt-4 rounded-md text-white font-semibold">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
