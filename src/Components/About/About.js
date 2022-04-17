import React from "react";
import Navber from "../Navber/Navber";

const About = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl">Welcome to about</h1>
      </div>
    </div>
  );
};

export default About;
