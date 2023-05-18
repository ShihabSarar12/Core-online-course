import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-[1fr_5fr]">
      <div>
        <Sidebar />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
