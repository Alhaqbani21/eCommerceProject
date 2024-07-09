import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../componenet/Nav';
function HomePage() {
  const [data, setdata] = React.useState([]);
  const [category, setcategory] = React.useState([]);
  const [product, setproduct] = useState([]);

  React.useEffect(() => {
    axios
      .get('https://665737379f970b3b36c86978.mockapi.io/login')
      .then((res) => {
        let array = [];
        setdata(res.data);
        res.data.filter((res) => {
          if (array.length == 0) {
            array.push(res.category);
          } else if (array.find((e) => e.id == res.category.id)) {
            return false;
          } else {
            array.push(res.category);
          }

          setcategory(array);
        });
        // console.log(a)
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://668a90262c68eaf3211d2977.mockapi.io/products')
      .then((response) => {
        // handle success
        const cleanedData = response.data.map((product) => {
          let images = product.images;
          if (typeof images === 'string') {
            images = JSON.parse(images);
          }
          return {
            ...product,
            images,
          };
        });
        setproduct(cleanedData);
        console.log(cleanedData[0]);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  return (
    <div className="bg-[#E9EBF7]">
      {/* navBar */}

      <Nav />

      {/* search */}
      <div className="flex-none absolute top-2 left-52 navbar-center gap-2">
        <div className="form-control  p-0 overflow-hidden rounded-lg  flex-row input input-bordered ">
          <input type="text" placeholder="Search" className="px-3" />

          <button className="w-10 bg-black">
            {' '}
            <svg
              className=" m-auto
        text-slate-200 "
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
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className=" bg-base flex flex-row-reverse justify-around  items-center">
        <div className=" ">
          <img
            className="w-80"
            src="https://www.digitalwebgrowth.in/public/assets/images/hero/dwg-banner.webp"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="mb-5 text-4xl font-bold"> New Collection </h1>

          <button className="btn bg-[#E47732] hover:bg-[#E97739] text-white">
            Shop now{' '}
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
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
                d="m10 16 4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex bg-white  p-5 justify-between">
        <div className="m-5">
          <h1 className="text-2xl  border-b-2 pb-3 border-secondary">
            Shop by categories
          </h1>

          <p className="text-gray-400 ">
            +{data.length} <br /> Unique product
          </p>
        </div>
        <section className="flex gap-2">
          {category.map((e) => (
            <div className="border hover:scale-105  bg-base-200 rounded-xl overflow-hidden">
              <img className="w-60" src={e.image} alt="" />
              <h2>{e.name}</h2>
            </div>
          ))}
        </section>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {product.map((e) => {
          return (
            <div key={e.id}>
              <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden m-4">
                <div className="relative">
                  <Link to={`/details/${e.id}`}>
                    <img
                      className="w-full h-64 object-cover"
                      src={e.images[0]}
                      alt="Product Image"
                    />{' '}
                  </Link>
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    HOT
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-sm text-gray-400">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.854 1.41 8.219L12 18.832 4.59 23.496 6 15.277 0 9.423l8.332-1.268z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.854 1.41 8.219L12 18.832 4.59 23.496 6 15.277 0 9.423l8.332-1.268z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.854 1.41 8.219L12 18.832 4.59 23.496 6 15.277 0 9.423l8.332-1.268z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.854 1.41 8.219L12 18.832 4.59 23.496 6 15.277 0 9.423l8.332-1.268z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.854 1.41 8.219L12 18.832 4.59 23.496 6 15.277 0 9.423l8.332-1.268z" />
                      </svg>
                      <Link to={`/details/${e.id}`}>
                        <span className="ml-2">(View Details)</span>
                      </Link>
                    </div>
                  </div>
                  <h2 className="mt-2 text-gray-800 text-lg font-semibold">
                    {e.title}
                  </h2>
                  <p className="mt-1 text-gray-600">${e.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
