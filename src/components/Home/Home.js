import React from "react";
import background from "../../assets/background.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-5 my-3">
      <img
        className="brightness-50 rounded-3xl w-full h-[33rem]"
        src={background}
        alt="img"
      />
      <h1 className="font-bold text-5xl p-10 absolute top-52 left-20 text-white">
        Learn at your own pace <br /> Join us today
      </h1>
      <Link to="register" className="btn glass absolute top-96 left-28">
        Join Now
      </Link>
    </div>
  );
};

export default Home;
