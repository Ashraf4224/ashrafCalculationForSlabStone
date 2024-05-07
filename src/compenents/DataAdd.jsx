import React, { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";

function DataAdd() {
  const [data, setData] = useState({});
  const inputRef = useRef();
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [List, setList] = useState([]);
  const clickFunc = (e) => {
    e.preventDefault();
    setList([...List, data]);
    inputRef.current.reset();
  };
  const totalArea = List.reduce((add, list) => {
    return (
      add +
      parseFloat(list.length) *
        parseFloat(list.width) *
        parseFloat(list.quantity)
    );
  }, 0);
  const deleteList = (index) => {
    const oldList = [...List];
    oldList.splice(index, 1);
    setList(oldList);
  };
  const [amountCal, setAmountCal] = useState();
  const totalRef = useRef();
  const handleSumbit = (e) => {
    e.preventDefault();
    if (!isNaN(parseFloat(amountCal))) {
      const calculatedTotal =
        parseFloat(totalArea / 100) * parseFloat(amountCal);
      alert("Total Amount =" + parseFloat(calculatedTotal));
      setList([]);
      totalRef.current.reset();
    }
  };
  return (
    <div className=" w-full h-screen bg-indigo-300  p-2 flex flex-col">
      <h1 className="text-center font-bold text-xl">ADD SIZE</h1>
      <form ref={inputRef} className="grid grid-cols-2 gap-2 justify-between">
        <input
          type="number"
          placeholder="0 feet"
          required
          name="length"
          className="pl-1 outline-none py-1 rounded-md"
          onChange={changehandler}
        />
        <input
          type="number"
          placeholder="0 feet"
          required
          name="width"
          className="pl-1 outline-none py-1 rounded-md"
          onChange={changehandler}
        />
        <input
          type="number"
          placeholder="Quantity"
          required
          name="quantity"
          className="pl-1 outline-none py-1 rounded-md"
          onChange={changehandler}
        />
        <button
          className=" bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg p-1"
          onClick={clickFunc}
        >
          Add
        </button>
      </form>
      <div className="w-full h-auto overflow-x-auto text-sm mt-4">
        <table className="w-[96%] table-auto border  mt-0 mx-auto my-table">
          <thead>
            <tr>
              <th className="border px-2 py-2">Length</th>
              <th className="border px-2 py-2">Width</th>
              <th className="border px-2 py-2">Qty</th>
              <th className="border px-2 py-2">Area</th>
              <th className="border px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {List.map((list, index) => {
              return (
                <tr
                  className="text-center hover:text-pink-600 hover:font-semibold"
                  key={index}
                >
                  <td className="border px-2 py-1">{list.length}</td>
                  <td className="border px-2 py-1">{list.width}</td>
                  <td className="border px-2 py-1">{list.quantity}</td>
                  <td className="border px-2 py-1">
                    {(
                      parseFloat(list.length) *
                      parseFloat(list.width) *
                      parseFloat(list.quantity)
                    ).toFixed(2)}
                  </td>
                  <td className="border px-2 py-1 ">
                    <button onClick={() => deleteList(index)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <p className="mt-4 text-red-600 font-extrabold text-xl">
          Total Area : {totalArea}{" "}
          <span className="text-black font-semibold text-base">Sq-Feet</span>
        </p>
      </div>
      <div className="bg-orange-200 w-full h-auto mt-4 p-2 flex flex-col">
        <h1 className="text-xl font-semibold text-center mb-2">Total Amount</h1>
        <form
          ref={totalRef}
          onSubmit={handleSumbit}
          className="grid grid-cols-2 gap-2"
        >
          <label> Total Area </label>
          <input
            type="number"
            readOnly
            value={totalArea / 100}
            required
            name="area"
            className="outline-none pl-2 py-1 rounded-lg"
          />
          <label className="text-base"> Amount (100 Sq-ft) </label>
          <input
            type="number"
            onChange={(e) => setAmountCal(e.target.value)}
            required
            name="amount"
            className="outline-none pl-2 py-1 rounded-lg"
          />
          <label></label>
          <button
            className="bg-gradient-to-r from-pink-600 to-purple-700 p-2 rounded-lg font-semibold hover:text-white"
            type="submit"
          >
            {" "}
            Total Amount
          </button>
        </form>
      </div>
    </div>
  );
}

export default DataAdd;
