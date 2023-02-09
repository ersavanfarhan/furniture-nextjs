import React from "react";

export default function Carousel() {
  return (
    <>
        <div
          id="carousel"
          className="w-full flex animate-carousel gap-3 pt-2"
        >
          <img src="../table.jpg" className="w-80 rounded-2xl" />
          <img src="../chair-furniture2.jpg" className="w-80 rounded-2xl" />
          <img src="../chair-furniture3.jpg" className="w-80 rounded-2xl" />
          <img src="../furniture-cover.jpg" className="w-80 rounded-2xl" />
          <img src="../table-chair.jpg" className="w-80 rounded-2xl" />

          <img src="../table.jpg" className="w-80 rounded-2xl" />
          <img src="../chair-furniture2.jpg" className="w-80 rounded-2xl" />
          <img src="../chair-furniture3.jpg" className="w-80 rounded-2xl" />
          <img src="../furniture-cover.jpg" className="w-80 rounded-2xl" />
          <img src="../table-chair.jpg" className="w-80 rounded-2xl" />
        </div>
    </>
  );
}
