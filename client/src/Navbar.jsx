import React from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "./App";

const Navbar = ({}) => {
  const user = useContext(userContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    axios.get('http://localhost:3001/logout')
    .then(res => {
      if(res.data === 'Success')
      navigate(0)
    }).catch(err => console.log(err))
  }
  return (
    <div className="flex items-center justify-between px-6 py-3 text-white bg-gradient-to-r from-sky-500 to-blue-600">
      <div>
        <h3 className="text-3xl font-bold uppercase">Blog App</h3>
      </div>
      <div className="space-x-6 text-lg font-semibold">
        <Link to="/">Blogs</Link>
        {user?.username && (
          <>
            <Link to="/create">Create Blog</Link>
          </>
        )}
        <a href="">Contact</a>
      </div>
      {user?.username ? (
        <div>
          <input
            type="button"
            value="Logout"
            className="text-lg font-semibold"
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div>
          <Link to="/login">
            <h5 className="text-lg font-semibold">Login</h5>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
