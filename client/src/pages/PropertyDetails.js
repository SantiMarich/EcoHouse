import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Carrousel from "../components/Carrousel";
import { BiSolidChevronRight } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { getHouse } from "../redux/actions/houseActions";

const { REACT_APP_EMAILJS_SERVICE } = process.env;
const { REACT_APP_EMAILJS_TEMPLATE } = process.env;
const { REACT_APP_EMAILJS_FORM } = process.env;

const PropertyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const house = useSelector((state) => state.houses.house);

  const [notification, setNotification] = useState(null);
  const form = useRef();

  const handleBackHome = () => {
    window.scrollTo(0, 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE,
        REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        REACT_APP_EMAILJS_FORM
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotification({
            type: "success",
            message: "Email enviado exitosamente!",
          });
        },
        (error) => {
          console.log(error.text);
          setNotification({
            type: "error",
            message: "No se envio el email. Intentelo nuevamente.",
          });
        }
      );
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    dispatch(getHouse(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("Images received by Carrousel:", house && house.image);
  }, [house]);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl text-gray-700 mb-[2px] font-semibold">
              {house && house.name}
            </h2>
            <h3 className="text-xs mb-2 text-green-800">
              {house && house.address}
            </h3>
            <div className="mb-4 mr-20 lg:mb-4 flex gap-x-2 text-xs">
              <div className="bg-green-700 text-white px-3 rounded-sm">
                {house && house.type}
              </div>
              <div className="bg-green-600 text-white px-3 rounded-sm ">
                {house && house.location && house.location.name}
              </div>
              <div className="bg-green-800 text-white px-3 rounded-sm ">
                {house && house.transaction}
              </div>
            </div>
          </div>

          <div className="text-xl mb-4 font-semibold flex flex-col items-start sm:items-start md:items-start lg:items-end xl:items-end text-start sm:text-start md:text-start lg:text-end xl:text-end text-green-600">
            {house && house.price ? (
              <>
                {house && house.moneda} {formatNumber(Number(house.price))}
                <div className="text-xs font-normal text-gray-400 ">
                  {house && house.monedatext}
                </div>
                <div className="bg-gray-500 w-fit text-xs font-normal text-white px-3 rounded-sm mt-2">
                  {house && house.modo}
                </div>
              </>
            ) : (
              <span className="text-lg mb-4 font-semibold text-start sm:text-start md:text-start lg:text-end xl:text-end text-green-600">
                Consultar
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="xs:w-full sm:w-full md:w-[768px] lg:w-[768px] xl:w-[768px]">
            <div className="mb-6">
              <Carrousel images={house && house.image} />
            </div>
            <div className="flex flex-col gap-x-4 text-green-800 mb-8 text-sm">
              <div className="flex gap-x-1 items-center mb-[2px] font-semibold text-green-600">
                <BiSolidChevronRight className="text-green-400" />
                Habitaciones:
                <div className="mr-[2px] font-normal text-gray-700">
                  {house && house.bedrooms}
                </div>
              </div>

              <div className="flex gap-x-1 items-center mb-[2px] font-semibold text-green-600">
                <BiSolidChevronRight className="text-green-400" />
                Baños:
                <div className="mr-[2px] font-normal text-gray-700">
                  {house && house.bathrooms}
                </div>
              </div>

              <div className="flex gap-x-1 items-center mb-[2px] font-semibold text-green-600">
                <BiSolidChevronRight className="text-green-400" />
                Superficie:
                <div className="mr-[2px] font-normal text-gray-700">
                  {house && house.surface} m²
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-700 mb-8">
              {house && house.description}
            </div>
            <div className="text-xs text-green-600">
              <p>
                Consulta por las formas de pago y financiación. Los precios son
                susceptibles a actualizaciones.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="flex relative overflow-hidden w-20 h-20 p-1 border border-gray-300 rounded-full items-center justify-center">
                <img
                  src={house && house.agent && house.agent.image}
                  alt=""
                  className="object-cover object-center w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold text-lg">
                  {house && house.agent && house.agent.name}
                </div>
                <Link
                  to={`https://wa.me/${
                    house && house.agent && house.agent.phone
                  }`}
                  className="text-green-600 text-xs"
                >
                  Enviar Whatsapp
                </Link>
              </div>
            </div>
            <form
              className="flex flex-col gap-y-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="border border-gray-300 focus:border-green-600 outline:none rounded w-full px-4 h-14 text-sm"
                type="text"
                name="user_name"
                placeholder="Nombre*"
              />
              <input
                className="border border-gray-300 focus:border-green-600 outline:none rounded w-full px-4 h-14 text-sm"
                type="email"
                name="user_email"
                placeholder="Mail*"
              />
              <input
                className="border border-gray-300 focus:border-green-600 outline:none rounded w-full px-4 h-14 text-sm"
                type="text"
                name="user_phone"
                placeholder="Telefono*"
              />
              <textarea
                className="border border-gray-300 focus:border-green-600 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Mensaje*"
                name="message"
                defaultValue="Hola! Estoy interesado en"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-green-600 hover:bg-green-700 text-white rounded p-4 text-sm w-full transition">
                  Enviar Mensaje
                </button>

                <Link
                  to="/"
                  className="border border-green-600 text-green-600 hover:border-green-600 hover:text-green-600 items-center justify-center rounded p-4 text-sm w-full transition text-center"
                  onClick={handleBackHome}
                >
                  Pagina Inicio
                </Link>
              </div>
              {notification && (
                <div
                  className={`${
                    notification.type === "success"
                      ? "text-green-600"
                      : "text-red-500"
                  } text-sm`}
                >
                  {notification.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
