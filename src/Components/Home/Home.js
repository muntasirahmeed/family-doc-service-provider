import React from "react";
import Experiences from "../Experiences/Experiences";

import Header from "../Header/Header";
import Naver from "../Navber/Naver";
import Services from "../Services/Services";

const Home = () => {
  return (
    <section className="">
      <Header></Header>
      <Services></Services>
      <Experiences></Experiences>
    </section>
  );
};

export default Home;
