import React, { useState, useEffect } from "react";
import axios from "axios";

export function Newest() {
  const [news, setNew] = useState<any[]>([]);

  useEffect(() => {
    const getNew = async () => {
      const { data: res } = await axios.get(
        "http://localhost:3004/new-product"
      );
      setNew(res);
    };
    getNew();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg">
      {news.map((news, index) => (
        <div
          className="w-full p-2 grid text-center hover:scale-110 hover:transition"
          key={index}
        >
          <div className="w-full">
            <img
              src={"../" + news.image}
              className="w-full mb-2 rounded-2xl aspect-[4/3]"
            />
          </div>
          <label className="text-sm lg:text-md xl:text-md font-black">
            {news.name}
          </label>
          <label className="text-xs lg:text-sm xl:text-sm">
            IDR {news.price}
          </label>
        </div>
      ))}
    </div>
  );
}


