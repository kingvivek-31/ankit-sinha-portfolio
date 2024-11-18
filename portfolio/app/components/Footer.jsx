import React from "react";

const Footer = () => {
  return (
    <div className="text-3xl flex items-center flex-col p-5 absolute bottom-0 left-0 w-full">
      <h1 className="text-white">
        <a href="">Instagram</a> | <a href="">Linkedin</a> |{" "}
        <a href="">Vimeo</a>
      </h1>
      <a href="" className="text-white text-3xl">
        ankitsinha@gmail.com
      </a>
    </div>
  );
};

export default Footer;
