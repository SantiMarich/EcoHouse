import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHouses,
  updateHouse,
  deleteHouse,
} from "../redux/actions/houseActions";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { HiCheck } from "react-icons/hi";

const AdminTable = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [editedPrice, setEditedPrice] = useState("");
  const [editedMoneda, setEditedMoneda] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [houseToDelete, setHouseToDelete] = useState(null);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const handleEdit = (house) => {
    setSelectedHouse(house);
    setEditedPrice(house.price);
    setEditedMoneda(house.moneda);
  };

  const handleSave = () => {
    if (
      selectedHouse &&
      (editedPrice !== selectedHouse.price ||
        editedMoneda !== selectedHouse.moneda)
    ) {
      dispatch(
        updateHouse(selectedHouse.id, {
          price: editedPrice,
          moneda: editedMoneda,
        })
      );
    }
    setSelectedHouse(null);
    window.location.reload();
  };

  const handleCancel = () => {
    setSelectedHouse(null);
  };

  const handleDeleteClick = (house) => {
    setHouseToDelete(house);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (houseToDelete) {
      dispatch(deleteHouse(houseToDelete.id));
      setHouseToDelete(null);
      setShowDeleteModal(false);
    }
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setHouseToDelete(null);
    setShowDeleteModal(false);
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="mt-5">
      <table className="table-auto w-full">
        <tbody className="text-center w-full text-xs mb-2">
          {houses &&
            houses.map((house) => (
              <tr key={house.id} style={{ height: "50px" }}>
                <td className="border px-2 py-2 font-semibold text-center justify-center items-center w-1/3">
                  {house.name}
                </td>
                <td className="border px-2 py-2 text-center justify-center items-center w-1/4">
                  {selectedHouse && selectedHouse.id === house.id ? (
                    <select
                      value={editedMoneda}
                      onChange={(e) => setEditedMoneda(e.target.value)}
                      className="w-full text-center justify-center items-center"
                    >
                      <option value="$">$</option>
                      <option value="U$D">U$D</option>
                      <option value="€">€</option>
                    </select>
                  ) : (
                    house.moneda
                  )}
                </td>
                <td className="border px-2 py-2 text-center justify-center items-center w-1/4">
                  {selectedHouse && selectedHouse.id === house.id ? (
                    <input
                      type="text"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                      className="w-full text-center justify-center items-center"
                    />
                  ) : (
                    formatNumber(house.price)
                  )}
                </td>
                <td className="border px-2 py-2 flex flex-row justify-center items-center w-full h-[50px]">
                  {selectedHouse && selectedHouse.id === house.id ? (
                    <>
                      <button
                        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-2 rounded mr-2"
                        onClick={handleSave}
                      >
                        <HiCheck />
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
                        onClick={handleCancel}
                      >
                        <AiOutlineClose />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-2 rounded mr-2"
                        onClick={() => handleEdit(house)}
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
                        onClick={() => handleDeleteClick(house)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {showDeleteModal && (
        <div
          id="deleteModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
              <button
                type="button"
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => setShowDeleteModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <svg
                className="text-gray-400 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="mb-4 text-gray-500">
                Estas seguro de eliminar esta propiedad?
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={handleCancelDelete}
                >
                  No, Cancelar
                </button>
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                  onClick={handleConfirmDelete}
                >
                  Si, Estoy Seguro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
