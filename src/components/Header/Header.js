import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-no-background.png";
import UserContext, { AuthContext } from "../../context/UserContext";
import User from "../User/User";
import Login from "../Login/Login";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mx-5">
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none mx-5">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
        </ul>
        {user ? (
          <User />
        ) : (
          <button
            onClick={() => {
              navigate("Login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
