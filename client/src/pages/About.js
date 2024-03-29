import React from "react";
import { Link } from "react-router-dom";

import Image from "../assets/img/Fondo2.jpg";
import Logo from "../assets/img/EcohouseLogo.png";

import {
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTiktokFill,
} from "react-icons/ri";

const Banner = () => {
  return (
    <section className="h-full max-auto " id="banner-section">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden overflow-hidden flex-1 lg:flex justify-end items-end h-[640px] w-[520px]">
          <img
            src={Image}
            alt=""
            className="object-cover object-center  w-full h-full"
          />
        </div>
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-start flex-1 px-4 lg:px-0 mb-14 mt-14">
          <h1 className="lg:text-[30px] font-semibold leading-none mb-6">
            {/* <span className="text-4xl text-green-700 lg:text-[48px] font-bold flex flex-col mb-4">
              ECO HOUSE
            </span>{" "} */}
            <img
              src={Logo}
              alt=""
              className="w-[220px] md:w-[275px] mb-4"
            ></img>
            <h2 className="text-lg lg:text-2xl">Servicios Inmobiliarios</h2>
            <span className="text-green-700 text-sm font-medium flex flex-col mt-2">
              Ciudad de Salta
            </span>{" "}
          </h1>
          <p className="max-w-[480px] mb-4 text-[14px] px-6 md:px-0 ">
            Somos un equipo apasionado por el desarrollo inmobiliario, con más
            de 5 años de experiencia en el mercado de la ciudad de Salta.
            Nuestra trayectoria nos ha permitido entender las necesidades de
            nuestros clientes y acompañarlos en cada paso de su proceso de
            inversión. Con{" "}
            <span className="text-green-600 font-bold ">ECO HOUSE</span>, no
            solo encontrarás una agencia inmobiliaria, sino un equipo
            comprometido en brindarte las mejores oportunidades para tu próxima
            inversión. Nos enorgullece ofrecer un servicio personalizado, basado
            en nuestra sólida experiencia local y en el profundo conocimiento de
            las diferentes zonas de la ciudad y las tendencias del mercado. En{" "}
            <span className="text-green-600 font-bold ">ECO HOUSE</span> nos
            hemos comprometido con la transparencia y el profesionalismo en cada
            transacción. Nuestra misión es proporcionar una experiencia cortés,
            eficiente y de calidad en cada interacción. Permitinos acompañarte
            en tu próxima inversión inmobiliaria.
          </p>
          <div className="w-full flex flex-col items-center sm:items-center md:items-center lg:items-start xl:items-start">
            <Link
              to="/contact"
              className="mb-4 text-[14px] text-green-600 hover:text-green-500 font-semibold"
            >
              Contactanos
            </Link>

            <div className="flex space-x-3 mb-2">
              <a
                href="https://wa.me/5493874033334"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappLine className="text-lg mr-[4px] text-green-700 hover:text-green-600" />
              </a>
              <a
                href="https://www.facebook.com/ECOHOUSEINMOBILIARIA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookCircleFill className="text-lg mr-[4px] text-green-700 hover:text-green-600" />
              </a>
              <a
                href="https://www.instagram.com/inmobiliariaecohousesalta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramLine className="text-lg mr-[4px] text-green-700 hover:text-green-600" />
              </a>
              <a
                href="https://www.tiktok.com/@ecohouseinmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTiktokFill className="text-lg mr-[4px] text-green-700 hover:text-green-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
