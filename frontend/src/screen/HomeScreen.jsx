import React from "react";
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadLineCards";
import Food from "../components/Food";
import Category from "../components/Category";

function Homescreen() {
  return (
    <div>
      {" "}
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default Homescreen;
