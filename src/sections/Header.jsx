import React, { useEffect, useState } from "react";
import { close, menu } from "../assets/icons";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  };

  useEffect(() => {
    setMenuClass(toggle ? "opacity-100" : "opacity-0");
  }, [toggle]);

  return (
    <nav className="w-full flex justify-between px-10 py-5 bg-black text-white sticky top-0">
      <div className="lg:text-5xl font-bold">
        <a href="#home">Logo</a>
      </div>
      <ul className="lg:flex hidden gap-6 justify-center items-center text-1xl">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex lg:hidden  flex-col">
        {iconToggle ? (
          <img
            src={close}
            width={40}
            height={40}
            alt=""
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        ) : (
          <img
            src={menu}
            width={40}
            height={40}
            alt=""
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        )}
        {toggle && (
          <div
            id="mob_menu"
            className={`bg-green-500 text-white absolute py-4 top-20 w-full right-0 ${menuClass}`}
          >
           <ul className="flex flex-col  justify-center items-center gap-2">
            <li className="text-xl text-white  font-semibold hover:bg-green-600 hover:text-white w-full  py-3 text-center">home</li>
            <li className="text-xl text-white  font-semibold hover:bg-green-600 hover:text-white w-full  py-3 text-center">Services</li>
            <li className="text-xl text-white  font-semibold hover:bg-green-600 hover:text-white w-full  py-3 text-center">Testimonials</li>
            <li className="text-xl text-white  font-semibold hover:bg-green-600 hover:text-white w-full  py-3 text-center">Pricing</li>
            <li className="text-xl text-white  font-semibold hover:bg-green-600 hover:text-white w-full  py-3 text-center">Contact</li>
           </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
