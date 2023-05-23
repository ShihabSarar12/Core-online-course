import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, description, price, image } = course;
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate(`course/${id}`);
  };
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
          <button onClick={handleBuyNow} className="btn btn-ghost text-black">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
