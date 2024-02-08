import React, { useEffect, useState } from "react";
import { Image, Transformation } from "cloudinary-react";

const UploadWidget = ({ onImageUpload, isPortada }) => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dgumwc2z4",
        uploadPreset: "ymuab8ak",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen cargada correctamente:", result.info.secure_url);
          onImageUpload(result.info.secure_url, isPortada);
        }
      }
    );

    if (isWidgetOpen) {
      widget.open();
    }

    return () => {
      widget.close();
    };
  }, [isWidgetOpen]);

  const handleOpenWidget = () => {
    setIsWidgetOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleOpenWidget}
        className="bg-gray-500 hover:bg-gray-600 text-white rounded p-4 text-xs w-full px-4 h-14 transition"
      >
        {isPortada ? "Cargar Imagen de Portada" : "Cargar Otra Imagen"}
      </button>
    </div>
  );
};

export default UploadWidget;
