import React, { useState, useEffect } from "react";
import Nav from "../componenet/Nav";
import CartItem from "../componenet/CartItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fetchCart } from "../features/cartSlice";

function CartPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [itemsData, setItemsData] = useState([]);
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      handleFetchUserData(userId);
    }
  }, [userId]);

  const handleFetchUserData = (userId) => {
    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`)
      .then((response) => {
        const userData = response.data;
        setUserData(userData);
        return axios.get(
          "https://668a90262c68eaf3211d2977.mockapi.io/products"
        );
      })
      .then((productResponse) => {
        setUserData((prevUserData) => {
          const itemsData = productResponse.data
            .filter((item) =>
              prevUserData.cart.some((cartItem) => cartItem.id === item.id)
            )
            .map((item) => {
              const cartItem = prevUserData.cart.find(
                (cartItem) => cartItem.id === item.id
              );
              return { ...item, qty: cartItem.quantity };
            });
          setItemsData(itemsData);
          return prevUserData;
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const deleteProductCart = (itemId) => {
    const updatedCart = userData.cart.filter(
      (cartItem) => cartItem.id !== itemId
    );
    const updatedUserData = { ...userData, cart: updatedCart };

    axios
      .put(
        `https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`,
        updatedUserData
      )
      .then(() => {
        setUserData(updatedUserData);
        const updatedItemsData = itemsData.filter((item) => item.id !== itemId);
        setItemsData(updatedItemsData);
        toast.success("Item deleted");
        handleFetchUserData();
        dispatch(fetchCart(userId));
      })
      .catch((error) => {
        console.error("Error deleting item from cart:", error);
        toast.error("Failed to delete item");
      });
  };

  const updateProductQuantity = (itemId, newQty) => {
    const updatedCart = userData.cart.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, quantity: newQty };
      }
      return cartItem;
    });
    const updatedUserData = { ...userData, cart: updatedCart };

    axios
      .put(
        `https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`,
        updatedUserData
      )
      .then(() => {
        setUserData(updatedUserData);
        const updatedItemsData = itemsData.map((item) => {
          if (item.id === itemId) {
            return { ...item, qty: newQty };
          }
          return item;
        });
        setItemsData(updatedItemsData);
        toast.success("Quantity updated");
        handleFetchUserData();
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
        toast.error("Failed to update quantity");
      });
  };

  return (
    <div>
      <Nav />
      <ToastContainer autoClose={2000} />

      <br />
      <h1 className="m-3 mx-9 text-xl font-bold">Shopping Cart</h1>
      <br />
      <section className="mx-3 max-sm:flex-col max-sm:w-full flex justify-around gap-2">
        {/* Product List */}

        <div className="flex-col rounded-lg shadow-2xl w-[60%]">
          {itemsData.length > 0 ? (
            <>
              {itemsData.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.images[0]}
                  qty={item.qty}
                  onDelete={deleteProductCart}
                  onQuantityChange={updateProductQuantity}
                />
              ))}
              <span className="flex max-sm:w-[90vw]  gap-2 mx-3">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                your package will be delivered in <strong>2-4 days</strong>
              </span>
            </>
          ) : (
            <div className="m-3 mx-9 text-center justify-center max-sm:w-full text-xl font-bold flex gap-4">
              Cart is empty{" "}
              <svg
                className="w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z"
                    stroke="#E47732"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 9V13"
                    stroke="#E47732"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 17.0195V17"
                    stroke="#E47732"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-4 max-sm:mt-5 shadow-2xl rounded-lg w-[40%] max-md:w-full h-fit">
          <h1 className="m-3 font-bold">Ready to pay?</h1>
          <div>
            <strong>
              Total amount is $
              {userData &&
                itemsData.reduce((total, item) => {
                  const cartItem = userData.cart.find(
                    (cartItem) => cartItem.id === item.id
                  );
                  localStorage.setItem(
                    "totalAmount",
                    total + item.price * cartItem.quantity
                  );
                  return total + item.price * cartItem.quantity;
                }, 0)}
            </strong>
          </div>
          <br />
          <button
            onClick={() => {
              navigate("../checkout");
            }}
            className="btn bg-green-500 hover:bg-green-300 w-full"
            disabled={!userData || itemsData.length === 0}
          >
            Checkout
          </button>
        </div>
      </section>
      <br />
    </div>
  );
}

export default CartPage;
