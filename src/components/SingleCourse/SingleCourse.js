import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Course from "../Course/Course";

const SingleCourse = () => {
  const course = useLoaderData();
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  const handlePurchase = () => {
    navigate("purchase");
  };
  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <>
      <div className="w-full h-[33rem] bg-slate-100 mt-5 rounded-2xl p-5">
        <div className="flex justify-center items-center flex-col">
          <img className="w-72 h-56" src={course.image} alt="" />
          <h1 className="text-xl font-bold">{course.name}</h1>
          <p className="text-slate-500">{course.description}</p>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            quas minus dignissimos laborum totam consequuntur impedit dolores,
            quidem molestiae, obcaecati illo incidunt est sed nulla. Sunt
            provident distinctio facere commodi.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet,
            dolorum qui veniam debitis voluptatum a vel sunt, excepturi
            laudantium error illum eligendi, sint cumque atque. Tempore eum
            dolores nemo.
          </p>
        </div>
        <div className="form-control flex justify-center items-center">
          <label className="label cursor-pointer justify-normal">
            <Link
              to={"termsConditions"}
              className="label-text text-2xl font-semibold underline"
            >
              Terms and Conditions
            </Link>
            <input
              onClick={handleChecked}
              type="checkbox"
              className="checkbox m-4"
            />
          </label>
          <button
            onClick={handlePurchase}
            type="submit"
            className="btn"
            disabled={!accepted}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
