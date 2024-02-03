import React, { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgumwc2z4",
        uploadPreset: "ymuab8ak",
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  return (
    <button
      onClick={() => widgetRef.current.open()}
      className="bg-gray-500 hover:bg-gray-600 text-white rounded p-4 text-xs w-full px-4 h-14 transition"
    >
      Cargar Imagenes
    </button>
  );
};

export default UploadWidget;
