import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CardTwo = () => {
  const [inputData, setInputData] = useState({
    BcryptVal: "",
    OriginalVal: "",
  });
  const [loading, setloading] = useState(false);
  const [response, setresponse] = useState();
  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  //handle the button
  async function HandleClick(e) {
    e.preventDefault();
    if (!inputData.BcryptVal || !inputData.OriginalVal) {
      toast.error("Please Enter Right Details...");
    } else {
      try {
        setloading(true);
        setTimeout(async () => {
          let res = await axios.post(
            "https://hash-backend.vercel.app/compare",
            {
              ...inputData,
            }
          );

          setresponse(res.data.message);
          setloading(false);
        }, 1000);
      } catch (error) {
        console.log("occured some error", error);
      }
    }
  }

  return (
    <div className="sm:w-[600px] sm:max-h-[470px] bg-[#F9F9F8]  border rounded-md shadow-xl  ">
      <div className="p-3 block flex-col m-2 space-y-5">
        <p className="text-2xl font-bold">Verify Hash</p>
        <p className="text-md text-gray-500 leading-5">
          Check if a bcrypt hash matches the original text.
        </p>
        <div className="space-y-2.5 leading-6">
          <p htmlFor="hash">Bcrypt Hash</p>
          <input
            type="text"
            id="hashone"
            className="border w-full shadow-md rounded-lg px-3 p-1.5"
            placeholder="Enter Text..."
            name="BcryptVal"
            onChange={handleChange}
            value={inputData.BcryptVal}
          />
          <p htmlFor="hash">Original Text</p>
          <input
            type="text"
            id="hashtwo"
            className="border w-full shadow-md rounded-lg px-3 p-1.5"
            placeholder="Enter Text..."
            name="OriginalVal"
            onChange={handleChange}
            value={inputData.OriginalVal}
          />
        </div>

        <button
          className={`w-full border bg-black text-white h-[35px] rounded-lg ${
            !inputData.BcryptVal?.trim() || loading
              ? "cursor-not-allowed bg-gray-500"
              : "cursor pointer"
          } `}
          onClick={HandleClick}
          type="submit"
        >
          {" "}
          {loading ? "Loading..." : "Verify Hash"}
        </button>
      </div>
      {/* hashpassword */}
      {response !== null &&
        response !== undefined &&
        (response === true ? (
          <p className="text-green-500 p-2 mx-4 bg-green-100 rounded-lg mb-2 font-semibold">
            {loading ? "Verifying..." : "Hash matches the text"}
          </p>
        ) : (
          <p className="text-red-500 p-2 mx-4 font-semibold bg-red-100 mb-2 rounded-lg">
            {/* {loading ? "Loading..." : " Hash does not matches the text"} */}
            {loading ? "Verifying...." : "Hash does not matches the text"}
          </p>
        ))}
    </div>
  );
};

export default CardTwo;
