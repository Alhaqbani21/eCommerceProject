import React from 'react';
import Nav from '../componenet/Nav';
import img from '../assets/card.png'
function CheckoutPage() {
  return <div>

{/* <Nav /> */}
<br />
<h1 className='m-3  mx-9 text-xl font-bold'>Sopping Cart</h1>
<br />
<section className='mx-3  max-sm:flex-col max-sm:w-full flex justify-around'>
{/* prodect */}
<section className=' bg-white max-sm:w-[90vw] max-sm:mx-5 max-sm:p-0 h-max p-5 shadow-2xl flex flex-col rounded-lg w-[60vw] '>
  
<div className='h-52 items-center overflow-hidden flex justify-around  '>

<img className='w-32 h-32 rounded-xl ' src="https://i.pinimg.com/474x/67/a2/d0/67a2d035a6b8fc0444b92154dc995859.jpg" alt="" />

<div>
<h1 className='font-bold '>
Title
</h1>
<label className='text-blue-700' htmlFor="">Qty:
<select className='p-3' name="" id="">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select> </label>
</div>

<strong>$30</strong>


<svg class="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
</svg>


</div>

<span className='flex gap-2 mx-3 '>
<svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg>

  your package will delivered in <strong>2-4 days</strong></span>
</section>


{/* cart */}
<div className='bg-white p-4 max-sm:mt-5 shadow-2xl max-sm:mx-7  rounded-lg' >
  <h1  className='m-3 font-bold'>Checkout</h1>
  <img className='w-40  ' src={img} alt="" />
  <div>
    <span>Name On card</span>
  <label className="input input-bordered bg-white flex items-center gap-2">
  <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
</svg>

  <input type="text" className="grow" placeholder="e.g Luke Duke" />
</label>

<br />
<span>Card Number</span>
  <label className="input input-bordered  bg-white  flex items-center gap-2">
  <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
</svg>


  <input type="text" className="grow" placeholder="---- ---- ----" />
</label>
<br />
<div className='flex gap-3 max-sm:w-full'>
  <label className="input input-bordered  bg-white  flex items-center gap-2">


  <input type="number"  className="max-sm:w-40" placeholder="MM/YY" />
</label>
<label className="input input-bordered  bg-white  flex items-center gap-2">


<input type="text" maxLength='3' className="max-sm:w-20" placeholder="cvv - - -" />
</label>
</div>

<span>YAY! No delivery fee on your order</span>
<br /><br />
    <strong>Total Payable $900</strong>
  </div>
  <button className=' btn  w-full '>PAY</button>
</div>
</section>


<br />

  </div>;
}

export default CheckoutPage;
