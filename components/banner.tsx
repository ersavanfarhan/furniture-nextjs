import React from "react";
import { Button } from "react-bootstrap";

export default function Banner() {
  const autoScroll = () => {
    document.getElementById("browse")!.scrollIntoView();
  };

  return (
    <div className="xs:grid sm:grid flex p-2">
      <div id="banner-image" className="w-full md:hidden lg:hidden xl:hidden">
        <img
          src="../Furniture store-amico 36AE54.png"
          className="xs:w-64 w-full mx-auto"
        />
      </div>
      <div id="slogan" className="w-full text-justify">
        <div id="top-slogan" className="xs:text-center sm:text-center grid">
          <label className="text-xl font-bold">Modern and Exclusive</label>
          <label className="text-5xl font-bold">FURNITURE</label>
        </div>
        <div id="bootom-slogan" className="mt-2">
          <label className="text-xl font-bold">
            Best selling product across the world
          </label>
          <p className="mt-1">
            Furniture App is a newly established furniture retail store focusing
            on modern and trendy furniture for the stylish individual. With our
            top quality products, we help you to create a comfort in your house
            more than you can ever feel.
          </p>
        </div>
        <Button
          variant="success"
          className="flex mt-3 bg-green-600 border-none rounded-3xl items-center"
          onClick={autoScroll}
        >
          SHOP NOW
          <span className="material-symbols-outlined">arrow_downward</span>
        </Button>
      </div>
      <div id="banner-image" className="w-full xs:hidden sm:hidden">
        <img
          src="../Furniture store-amico 36AE54.png"
          className="w-3/4 ml-auto mr-0"
        />
      </div>
    </div>
  );
}
