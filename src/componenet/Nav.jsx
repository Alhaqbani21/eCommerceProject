import img from "../assets/LogoNew.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import img from '../assets/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../features/cartSlice";

export default function Nav() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
    }
  }, [dispatch, userId]);
  return (
    <div className="navbar font-mono ">
      <div className="flex-1 max-sm:flex-auto navbar-start max-sm:navbar">
        <Link to={"/"}>
          {" "}
          <img className="w-40 max-sm:w-20" src={img} alt="" />
        </Link>
      </div>

      <div className="navbar-end max-sm:navbar">
        <ul className="flex justify-around w-96 max-sm:w-[60vw] ">
          <li>
            <Link to={"/"} className="hover:text-accent  text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-accent  text-lg">
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            {!localStorage.getItem("userId") ? (
              <Link to={"/login"} className=" text-lg hover:text-accent ">
                {" "}
                login{" "}
              </Link>
            ) : (
              <Link to={"/profile"} className="hover:text-accent  text-lg ">
                {" "}
                Profile{" "}
              </Link>
            )}
          </li>
        </ul>
        {localStorage.getItem("userId") && (
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link to={"/cart"}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>{" "}
                <span className="badge badge-sm text-white indicator-item bg-[#E47732]">
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
