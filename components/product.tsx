import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { ALL_PRODUCT } from "../utils/api";

export function Products() {
  const [products, setProduct] = useState<any[]>([]);
  const [half, setHalf] = useState(true);
  const [full, setFull] = useState(false);

  useEffect(() => {
    axios(ALL_PRODUCT)
        .then((response) => {
          setProduct(response.data)
        })
}, [])

  const loadMore = () => {
    setHalf(false);
    setFull(true);
  }

  const HalfProduct = () => {
    return (
      <div
        id="items"
        className="pb-3 grid grid-cols-4 gap-x-5 gap-y-5 xs:grid-cols-2 sm:grid-cols-3"
      >
        {products
          .filter((product, index) => index < 10)
          .map((product) => (
            <Link
          href={"/detail/" + product.id}
          className="w-full grid bg-green-100 text-center rounded-2xl hover:shadow-md"
          key={product.id}
        >
          <div className="w-full relative">
            <img
              src={product.image}
              className="w-full rounded-t-2xl aspect-[4/3]"
            />
          </div>
          <div className="grid p-2">
          <label className="text-sm lg:text-md xl:text-md font-black">
            {product.name}
          </label>
          <label className="text-xs lg:text-sm xl:text-sm">
            IDR {product.price}
          </label>
          </div>
        </Link>
          ))}
      </div>
    );
  };

  const FullProduct = () => {
    return (
      <div
        id="items"
        className="pb-3 grid grid-cols-4 gap-x-5 gap-y-5 xs:grid-cols-2 sm:grid-cols-3"
      >
        {products.map((product) => (
          <Link
          href={"/detail/" + product.id}
          className="w-full grid bg-green-100 text-center rounded-2xl hover:shadow-md"
          key={product.id}
        >
          <div className="w-full relative">
            <img
              src={product.image}
              className="w-full rounded-t-2xl aspect-[4/3]"
            />
          </div>
          <div className="grid p-2">
          <label className="text-sm lg:text-md xl:text-md font-black">
            {product.name}
          </label>
          <label className="text-xs lg:text-sm xl:text-sm">
            IDR {product.price}
          </label>
          </div>
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
            Load All Products
          </Button>
        </div>
      ) : null}

      {full ? <FullProduct /> : null}
    </>
  );
}
