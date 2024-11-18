import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[20vh] absolute top-0 left-0 w-full items-center">
      <div className="flex w-[450px] flex-col mx-9 ">
        <h1
          style={{ fontFamily: "khand" }}
          className="text-6xl text-white font-medium  pt-10">
          ANKIT SINHA
        </h1>
        <h2
          style={{ fontFamily: "khand" }}
          className="text-white text-2xl tracking-wider  ">
          Director | Writer | Producer
        </h2>
      </div>
      <div
        className="text-white flex items-center
           ">
        <ul className="flex">
          <li className="px-10 py-5">
            <Link href="/films">Films</Link>
          </li>
          <li className="px-10 py-5">Commercials</li>
          <li className="px-10 py-5">
            <Link href="/vlogs">Vlogs</Link>
          </li>
          <li className="px-10 py-5">
            <Link href="/">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
