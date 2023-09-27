import React, { useState, useContext } from 'react'
import axios from 'axios'
import { userContext } from './App'

const CreatePost = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [file, setFile] = useState()
  const user = useContext(userContext);

  const handleSubmit =(e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('file', file)
    formData.append('email', user.email)
    axios
      .post("http://localhost:3001/create", formData)
      .then((result) => {
        if (result.data === "Success") {
          location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[500px] p-6 border">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <h2 className="text-xl mb-4 font-semibold">Create Post</h2>
          <input
            type="text"
            className="border p-1 rounded-md"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            id="desc"
            cols="30"
            rows="10"
            className="border rounded-md p-1"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="file"
            className="border p-1 rounded-md"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="bg-green-500 w-full py-2 mt-4 rounded-md text-white font-semibold">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost
