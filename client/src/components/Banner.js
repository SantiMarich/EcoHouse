import React from "react";

import {
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiInstagramLine,
} from "react-icons/ri";

import Image from "../assets/img/house-banner.png";
import Sort from "./Sort";
import ScrollDown from "../components/ScrollDown";

const Banner = () => {
  return (
    <section
      className="h-full max-h-[640px] mb-[280px] sm:mb-[280px] md:mb-[280px] lg:mb-24 xl:mb-24"
      id="banner-section"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-start flex-1 px-4 lg:px-0 mb-4">
          <div className="flex space-x-3 mb-16">
            <a
              href="https://wa.me/5493874033334"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappLine className="text-xl mr-[4px] text-green-600 hover:text-green-500" />
            </a>
            <a
              href="https://www.facebook.com/ECOHOUSEINMOBILIARIA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookCircleFill className="text-xl mr-[4px] text-green-600 hover:text-green-500" />
            </a>
            <a
              href="https://www.instagram.com/inmobiliariaecohousesalta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramLine className="text-xl mr-[4px] text-green-600 hover:text-green-500" />
            </a>
          </div>
          <h1 className="lg:text-[30px] font-semibold leading-none mb-6">
            <span className="text-4xl text-green-400 lg:text-[48px] font-bold flex flex-col mb-4">
              ECO HOUSE
            </span>{" "}
            Servicios Inmobiliarios
            <span className="text-green-500 text-sm font-medium flex flex-col mt-2">
              Ciudad de Salta
            </span>{" "}
          </h1>
          <p className="max-w-[480px] mb-8 text-[14px] ">
            Encuentra las mejores oportunidades inmobiliaria con{" "}
            <span className="text-green-500 font-semibold ">ECO HOUSE</span>,
            expertos en alquiler y venta de propiedades en la ciudad de Salta.
            Nuestra experiencia local nos permite proporcionar asesoramiento
            detallado sobre las diferentes zonas de la ciudad y las tendencias
            del mercado. Estamos comprometidos a brindar transparencia y
            profesionalismo en cada paso del proceso, adaptándonos a tus
            necesidades específicas.
          </p>
          <ScrollDown targetSectionId="search-section" />
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end h-[550px] w-[520px] rounded-tl-[80px]">
          <img
            src={Image}
            alt=""
            className="object-cover object-center w-full h-full rounded-tl-[150px]"
          />
        </div>
      </div>
      <Sort id="house-list-section" />
    </section>
  );
};

export default Banner;
