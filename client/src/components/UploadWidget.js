import React, { useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";

const UploadWidget = ({ onImageUpload }) => {
  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dgumwc2z4",
        uploadPreset: "ymuab8ak",
        multiple: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen cargada correctamente:", result.info.secure_url);
          onImageUpload(result.info.secure_url);
        }
      }
    );

    const imageElement = document.getElementById("image");
    if (imageElement) {
      imageElement.addEventListener("click", handleClick);
    }

    function handleClick(event) {
      event.preventDefault();
      widget.open();
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener("click", () => {
          widget.open();
        });
      }
    };
  }, []);

  return (
    <div>
      <button
        id="image"
        className="bg-gray-500 hover:bg-gray-600 text-white rounded p-4 text-xs w-full px-4 h-14 transition"
      >
        Cargar imagen
      </button>
    </div>
  );
};

export default UploadWidget;
