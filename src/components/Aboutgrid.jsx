import React from 'react'

const Aboutgrid = ({icon,text,label,heading}) => {
  return (
    <div className='flex justify-center items-center  flex-col gap-6 bg-white rounded-lg m-2 p-3 lg:p-4'>
        <img src={icon} width={65} height={65} className='bg-green-400 p-3 rounded-full hover:bg-green-500 cursor-pointer' alt="" />
       <h2 className='text-2xl text-center font-bold text-green-500'>{heading}</h2>
       <p className='text-center'>{text}</p>
       <div>
        <button className='bg-green-600 px-2 py-2 lg:px-3 hover:bg-black hover:text-white rounded-md'>View more</button>
       </div>

    </div>
  )
}

export default Aboutgrid