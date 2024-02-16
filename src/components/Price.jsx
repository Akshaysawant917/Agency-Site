import React from "react";

const Price = ({ plan, price, label, about }) => {
  return (
    <div className="p-10 flex flex-col gap-5 ">
      <h1 className="text-green-500 text-2xl">{plan}</h1>
      <h2 className="text-green-500 text-4xl font-bold">{price}</h2>
      <div><button className="bg-green-500 px-4 py-2 rounded-md text-white text-1xl hover:bg-black hover:text-white">{label}</button></div>
      <p>{about}</p>
    </div>
  );
};

export default Price;
