import React, { useRef, useState } from "react";

const HashPassword = ({ saltvalue, token }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const inputref = useRef(null);
  function handleCopy() {
    if (inputref.current) {
      inputref.current.select();
      document.execCommand("copy");
      setCopySuccess("Copied!");
      setTimeout(() => {
        setCopySuccess("");
      }, 2000);
    }
  }
  return (
    <div className="w-full sm:h-[90px] h-[100px] rounded-md  border bg-white text-black">
      <div className="flex gap-2 p-2 mx-2 justify-between sm:h-[55px] h-[65px] ">
        <input
          readOnly
          className="focus:outline-none  w-[400px] "
          ref={inputref}
          value={token}
        />
        <button
          className="border sm:p-1 max-w-auto  mt-1 rounded-md bg-[#ECECEB] max-h-[60px] cursor-pointer font-semibold text-sm sm:max-h-[30px]"
          onClick={handleCopy}
        >
          {" "}
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      </div>
      <hr />
      <p className="p-1 mx-2 text-sm opacity-70">
        Generated with {saltvalue} rounds of Hashing{" "}
      </p>
    </div>
  );
};

export default HashPassword;
