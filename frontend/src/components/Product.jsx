import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import axios from "axios";

function Product(props, index) {
  const { product } = props;
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
  };
  return (
    <div
      key={index}
      className="border shadow-2xl rounded-lg hover:scale-105 duration-300"
    >
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
      </Link>
      <div className="flex justify-between px-2 py-4">
        <Link to={`/product/${product.slug}`}>
          <p className="font-bold mr-1">{product.name}</p>
        </Link>
        <div>
          <div className="flex gap-1">
            <span className="bg-orange-500 text-white p-1 rounded-full ">
              ${product.price}
            </span>
            <div className="bg-orange-500 text-white p-2 rounded-full text-xs text-center pt-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-orange-900">
              <BsFillCartFill onClick={addToCartHandler} />
            </div>
            {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
