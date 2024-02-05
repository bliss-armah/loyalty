"use client";
import React from "react";
import { HiGift } from "react-icons/hi";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const Navbar = () => {
  return (
    <nav className="bg-black flex justify-between items-center px-5 h-16 ">
      <h1 className="text-white font-bold">Loyalty</h1>
      <div className="flex gap-3">
        <div className="text-white flex items-center gap-x-[2px] hover:text-[17px] cursor-pointer">
          <HiGift />
          <p>Reward</p>
        </div>
        <div className="text-white flex items-center gap-x-[2px] hover:text-[17px] cursor-pointer">
          <HiGift />
          <p>Reward</p>
        </div>
        <div className="text-white flex items-center gap-x-[2px] hover:text-[17px] cursor-pointer">
          <HiGift />
          <p>Reward</p>
        </div>
      </div>
      <Button
        className="bg-white border border-[#24272F] text-[#24272F] hover:bg-transparent hover:border-[#858b99] hover:text-white font-semibold "
        onClick={() => signIn()}
      >
        Sign In
      </Button>
    </nav>
  );
};

export default Navbar;
