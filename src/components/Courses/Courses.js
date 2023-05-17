import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid grid-cols-[1fr_5fr]">
      <div>
        <Sidebar />
      </div>
      <div>
        <h1>This is courses</h1>
      </div>
    </div>
  );
};

export default Courses;
