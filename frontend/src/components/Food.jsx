import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "./LoadingBox";
import { getError } from "../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

function Food() {
  const [allProducts, setAllProducts] = useState();
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        setAllProducts(result.data);
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, []);
  console.log(products);

  const filterFoods = (filter, price) => {
    if (filter === "") {
      setAllProducts(products);
      return;
    }
    if (price === true) {
      const priceProduct = products.filter((x) => x.price === filter);
      setAllProducts(priceProduct);

      return;
    }
    const returnProducts = products.filter((x) => x.category === filter);
    setAllProducts(returnProducts);
  };

  // // //filter

  // const [foods, setFoods] = useState(products);

  // //   Filter Type burgers/pizza/etc
  // const filterType = (category) => {
  //   setFoods(
  //     products.filter((item) => {
  //       return item.category === category;
  //     })
  //   );
  // };

  // //   Filter by price
  // const filterPrice = (price) => {
  //   setFoods(
  //     products.filter((item) => {
  //       return item.price === price;
  //     })
  //   );
  // };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <Helmet>
        <title>stackeat</title>
      </Helmet>
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-10">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => filterFoods("")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:italic"
            >
              All
            </button>
            <button
              onClick={() => filterFoods("burger")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterFoods("pizza")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterFoods("salad")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterFoods("chicken")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterFoods(10, true)}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $10
            </button>
            <button
              onClick={() => filterFoods(20, true)}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $20
            </button>
            <button
              onClick={() => filterFoods(50, true)}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $50
            </button>
            <button
              onClick={() => filterFoods(100, true)}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $100
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <div>{error}</div>
        ) : (
          allProducts.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))
        )}
      </div>
    </div>
  );
}

export default Food;
