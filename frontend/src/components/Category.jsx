import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { categoryAnimation } from "../animation";
import axios from "axios";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/category");
      setCategories(result.data);
    };
    fetchData();
  }, []);
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={categoryAnimation}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      className="max-w-[1640px] m-auto px-4 py-16"
    >
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-6">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-2xl hover:scale-105 duration-300"
          >
            <h2 className="font-bold sm:text-xl">{category.name}</h2>
            <img src={category.image} alt={category.name} className="w-20" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Category;
