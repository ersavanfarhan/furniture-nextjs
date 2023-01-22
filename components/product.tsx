import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "react-bootstrap";

export function Products() {
  const [products, setProduct] = useState<any[]>([]);
  const [half, setHalf] = useState(true);
  const [full, setFull] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const { data: res } = await axios.get("http://localhost:3004/products");
      setProduct(res);
    };
    getProduct();
  }, []);

  const loadMore = () => {
    setHalf(false);
    setFull(true);
  }

  const HalfProduct = () => {
    return (
      <div
        id="browse1"
        className="pb-3 grid grid-cols-5 gap-x-2 gap-y-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg"
      >
        {products
          .filter((product, index) => index < 10)
          .map((product) => (
            <Link
              href={"/detail/" + product.id}
              className="w-full grid p-2 text-center hover:scale-110 hover:transition"
              key={product.id}
            >
              <div className="w-full relative">
                <img
                  src={"../" + product.image}
                  className="w-full mb-2 rounded-2xl aspect-[4/3]"
                />
                <div id="color" className="flex gap-2 absolute bottom-5 left-3">
                  <span className="w-3 h-3 bg-red-300 p-1 rounded-2xl shadow-md"></span>
                  <span className="w-3 h-3 bg-yellow-300 p-1 rounded-2xl shadow-md"></span>
                  <span className="w-3 h-3 bg-sky-300 p-1 rounded-2xl shadow-md"></span>
                </div>
              </div>
              <label className="text-sm lg:text-md xl:text-md font-black">
                {product.name}
              </label>
              <label className="text-xs lg:text-sm xl:text-sm">
                IDR {product.price}
              </label>
            </Link>
          ))}
      </div>
    );
  };

  const FullProduct = () => {
    return (
      <div
        id="browse1"
        className="pb-3 grid grid-cols-5 gap-x-2 gap-y-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg"
      >
        {products.map((product) => (
          <Link
            href={"/detail/" + product.id}
            className="w-full grid p-2 text-center hover:scale-110 hover:transition"
            key={product.id}
          >
            <div className="w-full relative">
              <img
                src={"../" + product.image}
                className="w-full mb-2 rounded-2xl aspect-[4/3]"
              />
              <div id="color" className="flex gap-2 absolute bottom-5 left-3">
                <span className="w-3 h-3 bg-red-300 p-1 rounded-2xl shadow-md"></span>
                <span className="w-3 h-3 bg-yellow-300 p-1 rounded-2xl shadow-md"></span>
                <span className="w-3 h-3 bg-sky-300 p-1 rounded-2xl shadow-md"></span>
              </div>
            </div>
            <label className="text-sm lg:text-md xl:text-md font-black">
              {product.name}
            </label>
            <label className="text-xs lg:text-sm xl:text-sm">
              IDR {product.price}
            </label>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      {half ? (
        <div>
          <HalfProduct />
          <Button variant="success" className="text-sm bg-green-600 rounded-3xl" onClick={loadMore}>
            Load More Products
          </Button>
        </div>
      ) : null}

      {full ? <FullProduct /> : null}
    </>
  );
}
