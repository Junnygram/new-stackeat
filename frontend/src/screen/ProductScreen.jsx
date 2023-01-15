import React, { useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../components/Rating";
import Available from "../components/stock/Available";
import Unavailable from "../components/stock/Unavailable";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import ErrorBox from "../components/ErrorBox";
import { Store } from "../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <ErrorBox>{error}</ErrorBox>
  ) : (
    <div className="grid md:grid-cols-2 px-4 mt-10 sm:grid-cols-1 gap-10">
      <div>
        <Helmet>
          <title>{product.name}</title>
        </Helmet>
        <img
          className="max-w-full and h-auto"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="grid grid-cols-2 ">
        <div className="px-3 mt-3">
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <div className="text-2xl font-bold border-b-2 border-orange-500 ">
            {" "}
            {product.name}
          </div>
          <div className="border-b-2 border-orange-500 ">
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </div>
          <div className="border-b-2 border-orange-500">
            Price: ${product.price}
          </div>
          <div className="border-b-2 border-orange-500">
            Description : {product.description}
          </div>
        </div>
        <div className="px-10 mt-4 ">
          <div className="flex ">Price: ${product.price}</div>
          <div className="flex gap-2">
            <div>status:</div>
            <div>
              {" "}
              {product.countInStock > 0 ? <Available /> : <Unavailable />}
            </div>
          </div>
          <button
            onClick={addToCartHandler}
            className="bg-orange-500 border-none text-white text-l py-2 px-4 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-orange-900 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
