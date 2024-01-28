import React, { useRef, useState } from "react";
import { housesData } from "../data";
import { useParams, Link } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  const [notification, setNotification] = useState(null);
  const form = useRef();

  const handleBackHome = () => {
    window.scrollTo(0, 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_li17sd7",
        "template_szd9c1y",
        form.current,
        "XUdAWRtt-W3drbuBP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotification({
            type: "success",
            message: "Email sent successfully!",
          });
        },
        (error) => {
          console.log(error.text);
          setNotification({
            type: "error",
            message: "Failed to send email. Please try again.",
          });
        }
      );
  };

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl mb-2 font-semibold">{house.name}</h2>
            <h3 className="text-sm mb-2 text-green-500">{house.address}</h3>
            <div className="mb-4 mr-20 lg:mb-4 flex gap-x-2 text-xs">
              <div className="bg-green-600 text-white px-3 rounded-md">
                {house.type}
              </div>
              <div className="bg-green-500 text-white px-3 rounded-md ">
                {house.country}
              </div>
              <div className="bg-green-800 text-white px-3 rounded-md ">
                {house.transaction}
              </div>
            </div>
          </div>

          <div className="text-2xl mb-4 font-semibold text-green-500">
            $ {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-4 text-green-700 mb-6">
              <div className="flex gap-x-1 items-center">
                <BiBed />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-1 items-center">
                <BiBath />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-1 items-center">
                <BiArea />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-green-500 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            <form
              className="flex flex-col gap-y-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
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
                defaultValue="Hola! Estoy interesado en"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition">
                  Enviar Mensaje
                </button>
                <a
                  href="https://wa.me/5493513838890"
                  className="bg-green-400 hover:bg-green-500 text-white text-center items-center justify-center rounded p-4 text-sm w-full transition"
                >
                  Enviar Whatsapp
                </a>
                <Link
                  to="/"
                  className="border border-green-800 text-green-800 hover:border-green-500 hover:text-green-500 items-center justify-center rounded p-4 text-sm w-full transition text-center"
                  onClick={handleBackHome}
                >
                  Pagina Inicio
                </Link>
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
      </div>
    </section>
  );
};

export default PropertyDetails;
