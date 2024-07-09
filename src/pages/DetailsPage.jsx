import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../componenet/Nav";

function Detailpage() {
  const { id } = useParams();
  const [viewDetails, setViewDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setViewDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!viewDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
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
          <div className="card__body p-8 flex flex-wrap mb-6">
            <div className="half flex-1 p-4">
              <div className="image pt-4 w-full">
                <img
                  src={
                    viewDetails.images && viewDetails.images.length > 0
                      ? viewDetails.images[0]
                      : "https://via.placeholder.com/150"
                  }
                  alt=""
                  className="block max-w-full h-auto"
                />
              </div>
              <div className="featured_text">
                <h1 className="m-0 p-0 font-extrabold text-4xl leading-tight text-gray-900 mt-8">
                  {viewDetails.title}
                </h1>
                <p className="sub m-0 p-0 font-light text-xl uppercase text-gray-600 mb-1 mt-1">
                  {viewDetails.category?.name}
                </p>
                <p className="price font-bold text-xl text-gray-900 mt-1">
                  ${viewDetails.price}
                </p>
              </div>
            </div>
            <div className="half flex-1 p-4">
              <div className="description mb-6">
                <p className="m-0 font-light leading-7 text-base text-gray-700 mt-[1em]">
                  {viewDetails.description}
                </p>
              </div>
              {/* <span className="stock font-semibold text-green-600"><i className="fa fa-pen"></i> In stock</span> */}
            </div>
          </div>
          <div className="card__footer p-8 flex items-center relative">
            <div className="absolute top-0 left-10 w-[calc(100%-40px)] h-0.5 bg-black bg-gradient-to-r from-black to-gray-300"></div>
            <div className="recommend flex-1">
              <p className="m-0 font-semibold uppercase text-sm text-gray-700">
                Recommended by
              </p>
              <h3 className="m-0 text-xl font-semibold uppercase text-black">
                Andrew Palmer
              </h3>
            </div>
            <div className="action">
              <Link to={"/"}>
                {" "}
                <button
                  type="button"
                  className="cursor-pointer border border-black py-3 px-7 rounded-full text-white bg-black font-semibold text-base transition duration-200 hover:bg-[#fff] hover:text-black"
                >
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailpage;
