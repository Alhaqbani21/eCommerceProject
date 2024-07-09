import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../componenet/Nav';
import imgHeader from '../assets/header.png'
function HomePage() {

  const [data, setdata] = React.useState([])
  const [category, setcategory] = React.useState([])
React.useEffect(() => {
  axios.get('https://665737379f970b3b36c86978.mockapi.io/login').then(res=>{
    let array=[]
    setdata(res.data)
    res.data.filter(res=>{
      if(array.length==0){
      array.push(res.category)
      }
        else if(array.find(e=>e.id==res.category.id))
        {
          return false
        }
        else{
      array.push(res.category)
    
        }
    
      setcategory(array)
    
    
    })
    // console.log(a)
    
        })
}, [])

  return <div className='bg-[#E9EBF7]'>
  {/* navBar */}

<Nav/>




{/* search */}
 <div className="flex-none absolute top-2 left-52 navbar-center gap-2">
    <div className="form-control  p-0 overflow-hidden rounded-lg  flex-row input input-bordered ">
      <input type="text" placeholder="Search"
       className="px-3" />

       <button className='w-10 bg-black'> <svg class=" m-auto
        text-slate-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>
 </button>
    </div>


  </div>





{/* Hero */}
<div
  className=" bg-base flex flex-row-reverse justify-around  items-center"
 >
  <div className=" "><img className='w-80' src='https://www.digitalwebgrowth.in/public/assets/images/hero/dwg-banner.webp' alt="" /></div>
    <div className="">
      <h1 className="mb-5 text-4xl font-bold"> New Collection </h1>

      <button className="btn bg-[#E47732] hover:bg-[#E97739] text-white">Shop now <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
</svg>
 </button>
    </div>
</div>





<div className='flex bg-white  p-5 justify-between'>
<div className='m-5'><h1 className='text-2xl  border-b-2 pb-3 border-secondary'>Shop by categories</h1>


<p className='text-gray-400 '>+{data.length} <br /> Unique product</p>
</div>
<section className='flex gap-2'>
{category.map(e=>(
    <div className='border hover:scale-105  bg-base-200 rounded-xl overflow-hidden'>
      <img className='w-60' src={e.image} alt="" />
      <h2>{e.name}</h2>
    </div>
  ))}
</section>


</div>


  </div>;
}

export default HomePage;
