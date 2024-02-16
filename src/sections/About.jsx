import React from "react";
import {aboutgrids} from "../exports";
import Aboutgrid from "../components/Aboutgrid";



const About = () => {
  return (
    <section
      id="services"
      className="w-full bg-slate-200 flex flex-col lg:flex-row justify-between items-center h-min-screen px-8 "
    >
      <div className="flex flex-col lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20 gap-8 ">
        <h1 className="text-6xl font-bold">Hosting solution with benefits</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          maiores.
        </p>
        <div>
          <button className="bg-green-500 text-[16px] py-3 px-4 rounded-md">
            Read more
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full lg:w-1/2  flex-wrap">
        
        {
          aboutgrids.map((grid)=>(
            <div key={grid.label} className="w-full  lg:w-1/2">
              <Aboutgrid {...grid}/>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default About;
