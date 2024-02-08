import React, { useEffect, useState } from "react";
import { Image, Transformation } from "cloudinary-react";

const UploadWidget = ({ onImageUpload, isPortada }) => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dgumwc2z4",
        uploadPreset: "ecohouse-app",
        apiKey: "242438313979396",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen cargada correctamente:", result.info.secure_url);
          onImageUpload(result.info.secure_url, isPortada);
          setUploadedImage(result.info);
          setError(null);
        } else {
          setError("Error al cargar la imagen. Por favor, inténtalo de nuevo.");
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
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {uploadedImage && (
        <div className="mt-4">
          <p>Imagen cargada:</p>
          <p>Nombre: {uploadedImage.original_filename}</p>
          <Image
            cloudName="dgumwc2z4"
            publicId={uploadedImage.public_id}
            width="150"
          >
            <Transformation width="150" height="100" crop="fill" />
          </Image>
        </div>
      )}
    </div>
  );
};

export default UploadWidget;
