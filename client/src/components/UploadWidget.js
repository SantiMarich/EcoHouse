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
        sources: ["local", "url", "camera", "image_search", "dropbox"],
        googleApiKey: "<YOUR_GOOGLE_API_KEY>",
        searchBySites: ["all", "cloudinary.com"],
        multiple: !isPortada,
        showCompletedButton: true,
        showUploadMoreButton: true,
        showPoweredBy: true,
        buttonText: {
          select: "Seleccionar imagen",
          complete: "Completado",
          retry: "Reintentar",
          uploading: "Cargando",
          uploaded: "Subida",
          upload_more: "Subir más",
          processing: "Procesando",
        },
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen cargada correctamente:", result.info.secure_url);
          onImageUpload(result.info.secure_url, isPortada);
          setUploadedImage(result.info);
          setError(null);
        } else if (error) {
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
        type="button"
        onClick={handleOpenWidget}
        className="bg-gray-400 hover:bg-gray-500 text-white rounded p-2.5 text-xs w-full px-4  transition"
      >
        {isPortada ? "Cargar Imagen Perfil" : "Cargar Imagenes"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {uploadedImage && (
        <div className="mt-4">
          <p className="flex text-xs mb-2 justify-center items-center">
            {uploadedImage.original_filename}
          </p>
          <Image
            cloudName="dgumwc2z4"
            publicId={uploadedImage.public_id}
            width="full"
          >
            <Transformation className="w-full " />
          </Image>
        </div>
      )}
    </div>
  );
};

export default UploadWidget;
