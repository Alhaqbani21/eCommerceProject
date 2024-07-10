import axios from 'axios';
import React from 'react';
import img from '../assets/about.png';
import { Link } from 'react-router-dom';
import Nav from '../componenet/Nav';
import imgHeader from '../assets/header.png';
import Footer from '../componenet/Footer';
function About() {
  const [data, setdata] = React.useState([]);
  const [category, setcategory] = React.useState([]);

  return (
    <div className="bg-[#E9EBF7] ">
      {/* navBar */}

      <Nav />

      {/* Hero */}
      <div className=" bg-base flex max-sm:flex-col flex-row-reverse justify-around  items-center">
        <div className=" ">
          <img
            className=""
            src="https://mir-s3-cdn-cf.behance.net/projects/404/5f1b7557123941.Y3JvcCwyOTkwLDIzNDAsMjU4LDA.jpg"
            alt=""
          />
        </div>
        {/* <div className="hero-content text-neutral-content text-center"> */}
        <div className="">
          <h1 className="mb-5 max-sm:mx-5 text-4xl font-bold text-center border-[#E47732] w-max pb-2 border-b-2">
            {' '}
            About us{' '}
          </h1>
          <p className="w-[40vw] max-sm:w-full max-sm:px-5 text-lg">
            {' '}
            lifestyle e-retailer committed to making the beauty of fashion
            accessible to all. We use on-demand manufacturing technology to
            connect suppliers to our agile supply chain, reducing inventory
            waste and enabling us to deliver a variety of affordable products to
            customers around the world. From our global offices, we reach
            customers in more than 150 countries.{' '}
          </p>
        </div>
        <br />
        {/* </div> */}
      </div>
      <br />
      <br />
      <br />
      <div className="flex bg-white p-5 items-center   ">
        <div className="flex w-full max-sm:flex-col max-sm:items-center justify-evenly">
          <img
            className="w-60"
            src="https://media.istockphoto.com/id/1133596041/vector/100-cotton-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=Y0ZrNEWNKfieExvIFLKZn0w1FJlvLrjKIINRIsbl3F4="
            alt=""
          />
          <div className="flex justify-center flex-col items-center">
            <img
              className="w-60 h-32"
              src="https://media.istockphoto.com/id/1309243817/vector/fast-delivery-truck-with-motion-lines-online-delivery-express-delivery-quick-move-fast.jpg?s=612x612&w=0&k=20&c=l2JlE6VQ4uRS6jABMS558puDgTyhEJW0bSiPhbBgXMc="
              alt=""
            />
            <h1 className="font-medium">Free Delivery </h1>
          </div>
          <div className="flex justify-center flex-col items-center">
            <img
              className="w-52 h-32"
              src="https://media.istockphoto.com/id/1213306848/vector/quality-icon-certified-check-mark-ribbon-label-vector-premium-product-certified-or-best.jpg?s=612x612&w=0&k=20&c=FKc_t8E0S6eh6ScZFK3sL577qpgJD0lzpfyEHAQWb3s="
              alt=""
            />
            <h1 className="font-medium">High Quality </h1>
          </div>
        </div>
      </div>
      <div className="md:absolute md:bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default About;
