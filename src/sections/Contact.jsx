import React from 'react'
import {call, sms, map, twitter, fb, insta, yt} from "../assets/icons"

const Contact = () => {
  return (
   <section id='contact' className='flex items-center justify-center bg-slate-200 w-full '>
    <div className='flex flex-col lg:flex-row  justify-between items-center w-[70vw] bg-white lg:p-10 m-4 z-10'>
      <div className='flex-col lg:w-1/2 justify-start items-center space-y-3 '>
        <h2>Contact info</h2>
        <span className='flex items-center text-2 '><img src={call} height={50} width={50} className='bg-green-500 rounded-full p-2 mr-2 hover:bg-green-700' alt="" /><p>+91 0000000000</p></span>
         <span className='flex items-center text-2'><img src={sms} height={50} width={50} className='bg-green-500 rounded-full p-2 mr-2 hover:bg-green-700' alt="" /><p>contact@mail.com</p></span>
         <span className='flex items-center text-2'><img src={map} height={50} width={50} className='bg-green-500 rounded-full p-2 mr-2 hover:bg-green-700' alt="" /><p>005,XYZ Street,California.</p></span>
        <div className='flex items-center gap-2'>
          <span className='bg-green-500 rounded-full p-2 box-content hover:bg-green-700'><img src={fb} width={30} height={30} alt="" /> 
          </span>
          <span className='bg-green-500 rounded-full p-2 box-content hover:bg-green-700'><img src={twitter} width={30} height={30} alt="" /> 
          </span>
          <span className='bg-green-500 rounded-full p-2 box-content hover:bg-green-700'><img src={insta} width={30} height={30} alt="" /> 
          </span>
          <span className='bg-green-500 rounded-full p-2 box-content hover:bg-green-700'><img src={yt} width={30} height={30} alt="" /> 
          </span>
      </div>
      </div>
      <div className='flex flex-col items-center w-1/2 gap-2'>
        <input className='lg:w-2/4 h-10 border-2 border-green-500 rounded-md px-2 mt-5' type="
        text"  placeholder='Enter your name'/>
         <input className='lg:w-2/4 h-10 border-2 border-green-500 rounded-md px-2' type="
        email"  placeholder='Enter your email adresss'/>
         <input className='lg:w-2/4 h-[100px] border-2 border-green-500 rounded-md px-2' type="
        text"  placeholder='Enter your message'/>
        <div className='lg:w-2/4 rounded-md'><button className='bg-green-500 w-full rounded-md p-2 mb-5'>Submit</button></div>
      </div>
    </div>
    <div className="bg-green-500 h-[250px] w-full absolute "></div>
   </section>
   
)
}

export default Contact