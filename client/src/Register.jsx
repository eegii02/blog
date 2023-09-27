import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {
      username, email, password
    }).then(res => navigate('/login')).catch(err => console.log(err))
  }
  return (
    <div className="flex justify-center items-center min-h-[90vh] ">
      <div className=" w-[400px]">
        <h2 className="mb-4 text-2xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type="text"
              className="w-full py-1 border-b-2 outline-none focus:border-blue-500"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <input
              type="text"
              className="w-full py-1 border-b-2 outline-none focus:border-blue-500"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <input
              type="password"
              className="w-full py-1 border-b-2 outline-none focus:border-blue-500"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md">
            Sign Up
          </button>
        </form>
        <br />
        <p>Already have an account.</p>
        <Link to="/login">
          <button className="w-full py-2 mt-4 font-semibold text-white bg-green-500 rounded-md">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register
