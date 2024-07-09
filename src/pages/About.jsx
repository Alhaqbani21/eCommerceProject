import axios from 'axios';
import React from 'react';
import img from '../assets/about.png'
import { Link } from 'react-router-dom';
import Nav from '../componenet/Nav';
import imgHeader from '../assets/header.png'
import Footer from '../componenet/Footer';
function About() {

  const [data, setdata] = React.useState([])
  const [category, setcategory] = React.useState([])

  return <div className='bg-[#E9EBF7]'>
  {/* navBar */}

<Nav/>







{/* Hero */}
<div
  className=" bg-base flex flex-row-reverse justify-around  items-center"
 >
  <div className=" ">
    <img className='' src={img} alt="" /></div>
  {/* <div className="hero-content text-neutral-content text-center"> */}
    <div className="">
      <h1 className="mb-5 text-4xl font-bold text-center border-[#E47732] w-max pb-2 border-b-2"> About us </h1>
      <p className='w-[40vw] text-lg'> lifestyle e-retailer committed to making the beauty of fashion accessible to all. We use on-demand manufacturing technology to connect suppliers to our agile supply chain, reducing inventory waste and enabling us to deliver a variety of affordable products to customers around the world. From our global offices, we reach customers in more than 150 countries. </p>

    </div>
  {/* </div> */}
</div>




 
<div className='flex bg-white  p-5 items-center  '>

<div>
{/* <svg class="w-20 h-20 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg> */}
{/* <p>Deliver free</p> */}

</div>
{/* <div>
    <img className='w-20 ' src="https://img.ltwebstatic.com/images3_acp/2022/01/29/164342396248323e6c006f7f312395771023f3889b.webp" alt="" />
<h1>
<strong className=''>150+</strong> <br />
countries</h1>

</div> */}

</div> 

<Footer/>
  </div>;
}

export default About;
