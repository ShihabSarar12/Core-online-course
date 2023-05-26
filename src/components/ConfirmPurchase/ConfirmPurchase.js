import React from "react";
import { useLoaderData } from "react-router-dom";

const ConfirmPurchase = () => {
  const course = useLoaderData();
  const { name, price } = course;
  return (
    <div className="w-screen h-[33rem] flex justify-center items-center">
      <h1 className="text-2xl font-semibold">
        {name} purchased!! Your account have been deducted of ${price}
      </h1>
    </div>
  );
};

export default ConfirmPurchase;
