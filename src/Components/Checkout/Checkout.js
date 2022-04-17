import React from "react";
import { useParams } from "react-router-dom";
import Navber from "../Navber/Navber";

const Checkout = () => {
  const { id } = useParams();
  return (
    <div className="banner">
      <Navber></Navber>
      <div className="h-[85vh] flex items-center justify-center">
        <h1 className=" text-4xl">Welcome To Chekcout {id}</h1>
      </div>
    </div>
  );
};

export default Checkout;
