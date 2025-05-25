import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full text-center m-5">
        <p className="text-3xl font-bold">Bcrypt Hash Generator</p>
        <p className="text-lg mt-4 sm:w-[50%] w-[70%] mx-auto text-gray-500">
          A simple tool to generate and verify bcrypt hashes. All processing
          happens in your browser for security.
        </p>
      </header>
    </>
  );
};

export default Header;
