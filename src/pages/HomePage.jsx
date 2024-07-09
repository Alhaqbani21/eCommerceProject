import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function HomePage() {
  const[prodect , setProdect]= useState([])


  useEffect(() => {
 
     axios.get('https://api.escuelajs.co/api/v1/products')
   .then(function (response) {
     // handle success
     console.log(response.data);
     setProdect(response.data)
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   })
   .finally(function () {
     // always executed
   });
 
     
  },[])
 




  return (
    <>
     <div className='grid grid-cols-4 gap-4'>
    {prodect.map((e) => {
return <div key={e.id}>
  
<div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden m-4">
  <div className="relative">
  <Link to={`/details/${e.id}`} ><img
      className="w-full h-64 object-cover"
      src={e.images}
      alt="Product Image"
    /> </Link>
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
        <Link to={`/details/${e.id}`} ><span className="ml-2">(View Details)</span></Link>
      </div>
    </div>
    <h2 className="mt-2 text-gray-800 text-lg font-semibold">{e.title}</h2>
    <p className="mt-1 text-gray-600">${e.price}</p>
  </div>
</div>
</div>
        
    })}
     </div>
    
    
    </>
  )
}

export default HomePage