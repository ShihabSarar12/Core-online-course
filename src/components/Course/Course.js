import React from "react";

const Course = ({ course }) => {
  const { name, description, price, image } = course;
  return (
    <div className="card card-compact w-[23rem] bg-base-100 shadow-xl">
      <figure>
        <img className="w-80 h-72" src={image} alt="Course" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost text-black">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
