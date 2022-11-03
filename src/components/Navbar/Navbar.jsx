import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg';

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <nav className="flex flex-row gap-5 pl-10 pr-10 pt-5 justify-between items-center xl:w-full bg-[#3ebfff] font-Barlow relative">
      <div>
        <a href="#" className="cursor-pointer">
          <Logo className="fill-white" />
        </a>
      </div>

      <div className="md:flex hidden flex-row gap-10 justify-self-end items-center ">
        <div>
          <a href="#" className="text-white cursor-pointer">
            About
          </a>
        </div>
        <div>
          <a href="#" className=" text-white cursor-pointer">
            Servcics
          </a>
        </div>
        <div>
          <a href="#" className=" text-white cursor-pointer">
            Projects
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-black bg-white py-3 px-5 rounded-full font-Fraunces font-bold cursor-pointer hover:text-white hover:bg-white/30"
          >
            CONTACT
          </a>
        </div>
      </div>
      <div className="md:hidden flex flex-row gap-10 justify-self-end items-center  ">
        <Hamburger
          className="cursor-pointer"
          onClick={() => {
            setOpenMobileNav(!openMobileNav);
          }}
        />
      </div>

      <div
        className={`md:hidden ${
          openMobileNav ? 'flex' : 'hidden'
        } flex-col gap-10 p-5 items-center bg-white  absolute  top-14 w-3/4 mr-auto ml-auto left-0 right-0 before:absolute before:-top-1 before:right-3 before:h-10 before:w-10 before:bg-white before:rotate-45 before:overflow-hidden`}
      >
        <div>
          <a href="#" className=" text-darkGrayishBlue cursor-pointer">
            About
          </a>
        </div>
        <div>
          <a href="#" className=" text-darkGrayishBlue cursor-pointer">
            Servcics
          </a>
        </div>
        <div>
          <a href="#" className=" text-darkGrayishBlue cursor-pointer">
            Projects
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-black bg-yellow py-3 px-5 rounded-full font-Fraunces font-bold cursor-pointer hover:text-white hover:bg-white/30"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
