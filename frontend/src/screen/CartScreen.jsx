import { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import ErrorBox from "../components/ErrorBox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1 className="text-3xl px-4">Shopping Cart</h1>
      <div>
        <div>
          {cartItems.length === 0 ? (
            <ErrorBox>
              Cart is empty.{" "}
              <Link to="/" className=" hover:underline cursor-default">
                Go Shopping
              </Link>
            </ErrorBox>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item._id} className="mt-6">
                  <div className=" grid grid-cols-4 w-4/5 pl-4 ml-4  border border-orange-300 h-30  ">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full rounded-lg h-20 "
                      />{" "}
                      <Link to={`/product/${item.slug}`} className="text-xs">
                        {item.name}
                      </Link>
                    </div>
                    <div className="flex px-5 ml-10">
                      <div
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="mx-auto my-auto text-base "
                      >
                        <i className="fas fa-minus-circle"></i>
                      </div>{" "}
                      <span className="mx-auto my-auto  text-xs px-1">
                        {item.quantity}
                      </span>{" "}
                      <div
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                        className="mx-auto my-auto text-base"
                      >
                        <i className="fas fa-plus-circle"></i>
                      </div>
                    </div>
                    <div className="mx-auto my-auto mr-3">${item.price}</div>
                    <div className="mx-auto my-auto">
                      <div onClick={() => removeItemHandler(item)}>
                        <i className="fas fa-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div md={4}>
          <div>
            <div>
              <div>
                <div>
                  <h3 className="text-center mt-4">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </div>
                <div>
                  <div className="grid">
                    <div
                      onClick={checkoutHandler}
                      type="button"
                      className="text-center mx-auto rounded-full bg-orange-300 cursor-default text-white text-l py-2 px-4 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-orange-500"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
