import React, { useState, useEffect } from 'react';
// import Nav from '../components/Nav';
import img from '../assets/card.png';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CartPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [itemsData, setItemsData] = useState([]);
  const userId = localStorage.getItem('userId');

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
        return axios.get('https://api.escuelajs.co/api/v1/products/');
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
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      {/* <Nav /> */}
      <br />
      <h1 className="m-3  mx-9 text-xl font-bold">Shopping Cart</h1>
      <br />
      <section className="mx-3 max-sm:flex-col max-sm:w-full flex justify-around gap-2">
        {/* Product List */}
        <div className="flex-col rounded-lg shadow-2xl w-[60%]">
          {itemsData.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.images[0]}
              qty={item.qty}
            />
          ))}
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
                  return total + item.price * cartItem.quantity;
                }, 0)}
            </strong>
          </div>
          <button
            onClick={() => navigate('../checkout')}
            className="btn bg-green-500 hover:bg-green-300 w-full"
            disabled={!userData || itemsData.length === 0}
          >
            Pay Now
          </button>
        </div>
      </section>

      <br />
    </div>
  );
}

export default CartPage;
