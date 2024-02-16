import React from 'react';
import {tick} from "../assets/icons";
import {pricing} from "../exports";
import Price from "../components/Price"

const Pricing = () => {
  return (
  <section id='pricing' className='flex flex-col w-full p-10 bg-slate-200 gap-5'>
        <h1 className='text-5xl font-bold mb-3 text-green-500'>Pricing table </h1>
        <div className='flex flex-col lg:flex-row'>
          <p className='lg:w-1/2 pr-20 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sit nihil dolores mollitia ad sed.</p>
          <div className='flex w-full justify-around items-center lg:w-1/2 px-1 lg:px-10'>
            <ul className='w-1/2 text-center flex-col  items-center'>
              <li><span className="flex items-center lg:gap-7 text-1 lg:text-2xl"><img src={tick} width={30} height={30} className='bg-green-400 rounded-full ' alt="" />Unlimited pages</span></li>
              <li><span className="flex items-center lg:gap-7 text-1 lg:text-2xl"><img src={tick} width={30} height={30} className='bg-green-400 rounded-full' alt="" />Free sub Domain</span></li>
              <li><span className="flex items-center lg:gap-7 text-1 lg:text-2xl"><img src={tick} width={30} height={30} className='bg-green-400 rounded-full' alt="" />Free SSL certificate</span></li>
            </ul>
            <ul className=' w-1/2 text-center flex-col  items-center' >
            <li><span className="flex items-center lg:gap-7 text-1 lg:text-2xl"><img src={tick} width={30} height={30} className='bg-green-400 rounded-full' alt="" />24/7 Support</span></li>
              <li><span className="flex items-center lg:gap-7 text-1 lg:text-2xl"><img src={tick} width={30} height={30} className='bg-green-400 rounded-full' alt="" />Free sub Domain</span></li>
              <li><span className="flex items-center lg:gap-7 text-1 lg:text-2xl"><img src={tick} width={30} height={30} className='bg-green-400 rounded-full' alt="" />Free sub Domain</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full p-2 gap-20 ">
        {pricing.map((price)=>(
           <div className="lg:w-1/3 w-full bg-white overflow-hidden  border-green-500 border-solid border-2 rounded-lg  "><Price {...price} /></div>
        ))}
        </div>
  </section>
  )
}

export default Pricing