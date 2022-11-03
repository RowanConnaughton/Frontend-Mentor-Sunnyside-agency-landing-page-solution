import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icon-instagram.svg';
import { ReactComponent as Pinterest } from '../../assets/icon-pinterest.svg';
import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#90d4c5] justify-center items-center py-28">
      <Logo className="scale-150 fill-darkDesaturatedCyan" />
      <ul className="flex flex-row py-10 gap-16 text-darkDesaturatedCyan text-lg font-Barlow font-semibold">
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Projects</li>
      </ul>
      <ul className="flex flex-row py-10 gap-8 text-darkDesaturatedCyan text-lg font-Barlow font-semibold">
        <li className="cursor-pointer">
          <Facebook className=" fill-darkDesaturatedCyan hover:fill-white" />
        </li>
        <li className=" cursor-pointer">
          <Instagram className=" fill-darkDesaturatedCyan hover:fill-white" />
        </li>
        <li className="cursor-pointer">
          <Twitter className=" fill-darkDesaturatedCyan hover:fill-white" />
        </li>
        <li className="cursor-pointer">
          <Pinterest className=" fill-darkDesaturatedCyan hover:fill-white" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
