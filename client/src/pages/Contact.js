import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTiktokFill,
} from "react-icons/ri";

const { REACT_APP_EMAILJS_SERVICE } = process.env;
const { REACT_APP_EMAILJS_TEMPLATE } = process.env;
const { REACT_APP_EMAILJS_FORM } = process.env;

const Contact = () => {
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

  return (
    <section className="h-full max-auto w-full mb-8 flex justify-around items-center">
      <div class="md:mb-12 lg:mb-8 flex flex-row mt-14 ">
        <div className="flex flex-col shadow-lg sm:flex-col md-flex-col lg:flex-row xl:flex-row space-x-8 border h-full max-auto w-[320px] sm:w-[320px] md:w-[320px] lg:w-[640px] xl:w-[640px] border-gray-300 outline:none rounded py-4 px-4 text-md mb-8">
          <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2  items-center">
            <div className="flex mb-2 mt-4 justify-center items-center text-lg font-semibold">
              Contactanos
            </div>
            <p className="text-center text-xs text-green-600 mb-2 pl-4 pr-4">
              Completá el formulario para contactarnos sobre cualquier pregunta
              o consulta y nos contactaremos a la brevedad
            </p>
            <div className="flex space-x-3 mb-2 mt-2 items-center text-sm font-semibold">
              Redes Sociales
            </div>
            <div className="flex space-x-3 mb-4 mt-2 items-center text-xl font-semibold">
              <a
                href="https://wa.me/5493874033334"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappLine className="text-lg mr-[4px] text-green-600 hover:text-green-500" />
              </a>
              <a
                href="https://www.facebook.com/ECOHOUSEINMOBILIARIA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookCircleFill className="text-lg mr-[4px] text-green-600 hover:text-green-500" />
              </a>
              <a
                href="https://www.instagram.com/inmobiliariaecohousesalta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramLine className="text-lg mr-[4px] text-green-600 hover:text-green-500" />
              </a>
              <a
                href="https://www.tiktok.com/@ecohouseinmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTiktokFill className="text-lg mr-[4px] text-green-600 hover:text-green-500" />
              </a>
            </div>
            <div className="flex space-x-3 mb-2 mt-2 items-center text-sm font-semibold">
              Teléfono
            </div>
            <p className="text-center text-xs text-green-600 mb-4">
              +54 387 4033334
            </p>
            <div className="flex space-x-3 mb-2 mt-2 items-center text-sm font-semibold">
              Ubicación
            </div>
            <p className="text-center text-xs text-green-600 mb-1">
              Mendoza 748 Oficina 2
            </p>
            <p className="text-center text-xs text-green-600 mb-4">
              Ciudad de Salta
            </p>
            <div className="flex space-x-3 mb-2 mt-2 items-center text-sm font-semibold">
              Horarios Atención
            </div>
            <p className="text-center text-xs text-green-600 mb-1">
              Lunes a Viernes
            </p>
            <p className="text-center text-xs text-green-600 mb-1">
              10:00 hs - 12:00 hs
            </p>
            <p className="text-center text-xs text-green-600 mb-1">
              17:00 hs - 19:00 hs
            </p>
            <div className="flex space-x-3 mb-2 mt-2 items-center text-xl font-semibold"></div>
          </div>
          <form
            className="flex flex-col gap-y-4 w-[225px] lg:w-1/2 xl:w-1/2 mt-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className=" border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
              type="text"
              name="user_name"
              placeholder="Nombre*"
            />
            <input
              className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
              type="email"
              name="user_email"
              placeholder="Mail*"
            />
            <input
              className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
              type="text"
              name="user_phone"
              placeholder="Telefono*"
            />
            <textarea
              className="border border-gray-300 focus:border-green-500 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
              placeholder="Mensaje*"
              name="message"
            ></textarea>
            <div className="flex gap-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition">
                Enviar Mensaje
              </button>
            </div>
            {notification && (
              <div
                className={`${
                  notification.type === "success"
                    ? "text-green-500"
                    : "text-red-500"
                } text-sm`}
              >
                {notification.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
