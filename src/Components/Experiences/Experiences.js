import React from "react";
import Experience from "./Experience/Experience";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      name: "Behave Like Friend",
      image: "https://i.ibb.co/3Nr0YK6/img1.png",
      info: "There are many variations of passages of Lorem Ipsum available, but the majority ",
    },
    {
      id: 2,
      name: "One of Best Serjon's",
      image: "https://i.ibb.co/dPqt3qw/img2.png",
      info: "There are many variations of passages of Lorem Ipsum available, but the majority ",
    },
    {
      id: 3,
      name: " updated medicine",
      image: "https://i.ibb.co/fFBMS8z/img3.png",
      info: "There are many variations of passages of Lorem Ipsum available, but the majority",
    },
    {
      id: 4,
      name: "ideal chekup",
      image: "https://i.ibb.co/MNSRzGd/img4.png",
      info: "There are many variations of passages of Lorem Ipsum available, but the majority",
    },
    {
      id: 5,
      name: "100+ Operations",
      image: "https://i.ibb.co/L1d1zPB/img5.png",
      info: "There are many variations of passages of Lorem Ipsum available, but the majority ",
    },
    {
      id: 6,
      name: "Kind with patient",
      image: "https://i.ibb.co/N9BBpJF/img6.png",
      info: "There are many variations of passages of Lorem Ipsum available, but the majority",
    },
  ];
  return (
    <div className="font-poppins bg-cyan-50 py-10 ">
      <div className="max-w-[1280px] mx-auto px-10 gap-5">
        <h1 className="text-center pb-5 text-2xl md:text-4xl  text-cyan-700 font-semibold ">
           EXPERIENCES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10">
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              experience={experience}
            ></Experience>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
