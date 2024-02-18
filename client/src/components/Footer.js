import React from "react";

import {
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTiktokFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-green-600 shadow h-160 sm:flex sm:items-center sm:justify-between p-8 sm:p-8 xl:p-10 dark:bg-green-600 antialiased">
      <p className="mb-4 text-xs text-center text-white dark:text-white sm:mb-0">
        &copy; 2024 <a>EcoHouse Inmobiliaria</a>
      </p>
      <div className="flex justify-center items-center space-x-3 mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 ">
        <a
          href="https://wa.me/5493874033334"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappLine className="text-xl mr-[4px] text-white" />
        </a>
        <a
          href="https://www.facebook.com/ECOHOUSEINMOBILIARIA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookCircleFill className="text-xl mr-[4px] text-white" />
        </a>
        <a
          href="https://www.instagram.com/inmobiliariaecohousesalta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramLine className="text-xl mr-[4px] text-white" />
        </a>
        <a
          href="https://www.tiktok.com/@ecohouseinmobiliaria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTiktokFill className="text-xl mr-[4px] text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
