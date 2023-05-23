import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div className="m-2 p-2 bg-slate-100 cursor-pointer rounded-lg">
          <Link to={`course/${course.id}`}>{course.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
