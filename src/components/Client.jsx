import React from 'react'

const Client = ({image,about,name,profile}) => {
  return (
    <div className='flex flex-col w-full p-8 rounded-md justify-center items-center gap-4 '>
        <img src={image}width={100}height={100} alt="" />
        <p className='text-1xl'>{about}</p>
        <h3 className='text-4xl'>{name}</h3>
        <h4>{profile}</h4>
    </div>
  ) 
}

export default Client