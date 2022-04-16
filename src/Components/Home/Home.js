import React from "react";
import Experiences from "../Experiences/Experiences";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Naver from "../Navber/Naver";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <section className="banner  ">
      <Naver></Naver>
      <Header></Header>
      <Experiences></Experiences>
      <Services></Services>
      <Footer></Footer>
    </section>
  );
};

export default Home;
