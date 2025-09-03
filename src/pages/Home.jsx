import React from "react";
import Hero from "../component/Hero/Hero";
import WhyBaselinks from "../component/WhyBaselinks/WhyBaselinks";
import Explore from "../component/Explore/Explore";
import Ready from "../component/Ready/Ready"
import Learners from "../component/Learners/Learners";

export default function Home(){
  return (
    <>
      <Hero />
      <WhyBaselinks />
      <Explore />
      <Learners />
      <Ready />
    </>
  );
}
