import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="px-10 py-8 mx-auto align-center items-center justify-center ">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="mb-4 text-xl">Sign Up</h1>
      <div className=" flex flex-col items-center justify-center px-6  mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 lg:justify-center">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={submitHandler}>
              <div className="mb-3" controlId="name">
                <label htmlFor="email">Name</label>
                <input
                  type="name"
                  autoFocus
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="your full name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3" controlId="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  autoFocus
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3" controlId="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  autoFocus
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="********"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mb-5" controlId="confirmPassword">
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input
                    type="password"
                    autoFocus
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="********"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-2/4 ml-[5rem] border-none text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
              </div>
              <div className="mb-3 text-center">
                Already have an account?{" "}
                <Link to={`/signin?redirect=${redirect}`} className="underline">
                  Sign-In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

//created SignupScreen, PaymementMethodScreen,ShippingSreen
