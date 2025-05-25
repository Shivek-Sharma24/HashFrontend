import React from "react";
import { useState } from "react";
import HashPassword from "./HashPassword";
import axios from "axios";
import toast from "react-hot-toast";

const Cardone = () => {
  const [inputs, setInputs] = useState({ Saltval: 10, hashPassword: "" });
  const [response, setresponse] = useState();
  const [loading, setloading] = useState(false);

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  //handle click function
  async function handleClick() {
    if (!inputs.Saltval || !inputs.hashPassword) {
      toast.error("Enter all fields...");
    } else {
      try {
        setloading(true);
        setTimeout(async () => {
          let res = await axios.post("http://localhost:4000/generate", {
            ...inputs,
          });
          setresponse(res.data);
          console.log(res.data);
          setInputs({ ...inputs, hashPassword: "", Saltval: 10 });
          setloading(false);
        }, 2000);
      } catch (error) {
        console.log("some error in cardOne", error);
      }
    }
  }

  return (
    <div className="sm:w-[620px] sm:max-h-[470px] bg-[#F9F9F8]  border rounded-md shadow-xl  ">
      <div className="p-3 block flex-col m-2 space-y-4">
        <p className="text-2xl font-bold">Generate Hash </p>
        <p className="text-md text-gray-500 leading-5">
          Generate a bcrypt hash from your text. Higher rounds provide better
          security but take longer to process.
        </p>
        <div className="space-y-2 leading-5">
          <p htmlFor="hash">Text to Hash</p>
          <input
            type="text"
            id="hash"
            className="border w-full shadow-md rounded-lg px-3 p-1.5"
            placeholder="Enter Text..."
            onChange={handleChange}
            value={inputs.hashPassword}
            name="hashPassword"
          />
        </div>
        <div>
          <p>Rounds (Cost Factor):- {inputs.Saltval}</p>
          <input
            type="range"
            name="Saltval"
            id=""
            max={20}
            min={1}
            className="w-full cursor-pointer slider"
            onChange={handleChange}
            value={inputs.Saltval}
          />
          {inputs.Saltval > 10 ? (
            <p className="text-green-600">
              High Security - suitable for production
            </p>
          ) : (
            <p className="text-red-500">Medium Security - Good for Testing</p>
          )}
        </div>
        <button
          className={`w-full border bg-black text-white h-[35px] rounded-lg ${
            !inputs.hashPassword?.trim() || loading
              ? "cursor-not-allowed bg-gray-500"
              : "cursor pointer"
          }`}
          onClick={handleClick}
          disabled={!inputs.hashPassword?.trim()}
        >
          {" "}
          {loading ? "Loading...." : "Generate Hash"}
        </button>
        {response ? (
          <HashPassword
            saltvalue={response.round}
            token={response.hashPassword}
          />
        ) : null}
      </div>
      {/* hashpassword */}
    </div>
  );
};

export default Cardone;
