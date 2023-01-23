import React, { useEffect, useReducer } from "react";
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
    case "FILTER":
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        countProducts: action.payload.countProducts,
        loading: false,
      };

    default:
      return state;
  }
};

function Food() {
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
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, []);
  console.log(products);

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
              // onClick={() => setFoods(products)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:italic"
            >
              All
            </button>
            <button
              // onClick={() => filterType("burger")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              // onClick={() => filterType("pizza")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              // onClick={() => filterType("salad")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              // onClick={() => filterType("chicken")}
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
            // onClick={() => setfilterPrice("$10")}
            // className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $10
            </button>
            <button
              // onClick={() => setfilterPrice("$20")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $20
            </button>
            <button
              // onClick={() => setfilterPrice("$50")}
              className="hover:italic m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $50
            </button>
            <button
              // onClick={() => setfilterPrice("$100")}
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
          products.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))
        )}
      </div>
    </div>
  );
}

export default Food;
