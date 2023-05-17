import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-no-background.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mx-5">
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none mx-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="" alt="profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
