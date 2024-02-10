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
  };

  const handleCancel = () => {
    setSelectedHouse(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta casa?")) {
      dispatch(deleteHouse(id));
    }
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
                        onClick={() => handleDelete(house.id)}
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
    </div>
  );
};

export default AdminTable;
