import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full top-0  h-[65px] fixed overflow-hidden  text-white bg-black  items-center ">
      <span className="flex mx-10 gap-1">
        <p className="text-2xl font-bold mt-1 font-serif ">HashCompare</p>

        <p className="text-lg font-serif mt-1 p-0.5 sm:block hidden">
          - online Hash Generator & Checker
        </p>
      </span>
    </nav>
  );
};

export default Navbar;
