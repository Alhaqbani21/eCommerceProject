import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../componenet/Nav';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { fetchCart } from '../features/cartSlice';

function Detailpage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [viewDetails, setViewDetails] = useState(null);
  const [userData, setUserData] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`)
      .then((res) => {
        setUserData(res.data);
      });

    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/products/${id}`)
      .then((response) => {
        setViewDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!viewDetails) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = (product) => {
    console.log(userData);
    const existingItem = userData.cart.find((item) => item.id === product.id);
    const updatedCart = existingItem
      ? userData.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...userData.cart, { ...product, quantity: 1 }];

    const updatedUserData = { ...userData, cart: updatedCart };

    axios
      .put(
        `https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`,
        updatedUserData
      )
      .then(() => {
        setUserData(updatedUserData);
        toast.success('Added product to cart!');
        dispatch(fetchCart(userId));
      })
      .catch((error) => {
        console.error('Error updating cart:', error);
        toast.error('Failed to add product to cart');
      });
  };
  return (
    <>
      <Nav />
      <ToastContainer autoClose={2000} />

      <div className="max-w-2xl mx-auto mt-20">
        <div className="card shadow-lg transition duration-200 bg-white">
          <div className="card__title flex items-center p-8">
            <div className="icon bg-blue-700 text-white p-2 transition duration-200">
              <a href="#">
                <i className="fa fa-arrow-left"></i>
              </a>
            </div>
            <h3 className="flex-0 text-right m-0 text-gray-900 font-semibold text-xl uppercase ml-4">
              New products
            </h3>
          </div>
          <div className="card__body max-sm:flex-col p-8 flex flex-wrap mb-6">
            <div className="half flex-1 p-4">
              <div className="image pt-4 w-full">
                <img
                  src={
                    viewDetails.images && viewDetails.images.length > 0
                      ? viewDetails.images[0]
                      : 'https://via.placeholder.com/150'
                  }
                  alt=""
                  className="block max-w-full h-auto"
                />
                <h1 className="m-0 p-0 font-extrabold text-4xl leading-tight text-gray-900 mt-8">
                  {viewDetails.title}
                </h1>
                <p className="price font-bold text-xl text-gray-900 mt-1">
                  ${viewDetails.price}
                </p>
              </div>
              <div className="featured_text">
                {/* <span className="text-accent">
                  discount {viewDetails.discount}
                </span>
                {console.log(viewDetails.discount.split('%'))} */}
                {/* {viewDetails.price + Number(viewDetails.discount)} */}
              </div>
            </div>
            <div className="half flex-1 p-4">
              <div className="description mb-6">
                <p className="sub m-0 p-0 font-light text-xl uppercase text-gray-600  mt-1">
                  {viewDetails.category?.name}
                </p>

                <p className="m-0  leading-7 text-base text-gray-600 ">
                  {viewDetails.description}
                </p>
              </div>
              {/* <span className="stock font-semibold text-green-600"><i className="fa fa-pen"></i> In stock</span> */}
            </div>
          </div>
          <div className="card__footer p-8 flex items-center relative">
            <div className="absolute top-0 left-10 max-sm:w-80 w-[calc(100%-40px)] h-0.5 bg-black bg-gradient-to-r from-black to-gray-300"></div>

            <div className="action flex justify-around w-full">
              <Link to={'/'}>
                {' '}
                {/* <button
                  type="button"
                  className="cursor-pointer border border-black py-3 px-7 rounded-full text-white bg-black font-semibold text-base transition duration-200 hover:bg-[#fff] hover:text-black"
                >
                  Back to Home
                </button> */}
              </Link>
              <button
                className="btn rounded-3xl text-lg bg-[#E47732] hover:bg-[#E97739] text-white self-end w-[10em] max-sm:ml-0 ml-[22em]"
                onClick={() => handleAddToCart(viewDetails)}
                disabled={!userId}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailpage;
