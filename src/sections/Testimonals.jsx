import React from "react";
import { clients } from "../exports";
import Client from "../components/Client";


const Testimonals = () => {
  return (
    <section id="testimonials" className="w-full bg-white text-center px-10 py-3">
      <h5 className="text-4xl mb-2">Testimonials</h5>
      <h4 className="text-6xl font-bold text-green-500 mb-2">What clinet says</h4>
      <p className="text-2xl mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-col lg:flex-row w-full p-2 gap-5">
        {clients.map((client) => (
          <div className="lg:w-1/4 w-full bg-slate-200 "><Client {...client} /></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonals;
