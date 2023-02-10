import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { CART_PRODUCT } from "../../utils/api";

export default function Cart() {
  const [carts, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      await axios.get(CART_PRODUCT).then((response) => {
        setCart(response.data);
        // console.log(response.data.products);
      });
    };
    getCart();
  }, []);

  useEffect(() => {
    setTotal(
      carts.reduce((accumulator, obj) => {
        return accumulator + obj.subtotal;
      }, 0)
    );

    const empty = document.getElementById("empty");
    const pay = document.getElementById("pay");
    if (carts.length !== 0) {
      empty!.style.display = "none";
      pay!.style.display = "block";
    } else {
      empty!.style.display = "block";
      pay!.style.display = "none";
    }
  });

  const getData = () => {
    axios.get(CART_PRODUCT).then((response) => {
      setCart(response.data);
    });
  };

  const deleteCart = (id: any) => {
    axios.delete(CART_PRODUCT + id).then(() => {
      getData();
    });
  };

  const payCart = () => {
    swal({
      title: "Warning",
      text: "Pay your order for Rp " + total + "?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
    }).then((Confirm) => {
      if (Confirm) {
        swal({
          title: "Success",
          text: "Paid successfully!",
          icon: "success",
          buttons: [false, "OK"],
        }).then(() => {
          window.location.href = "/success";
        });
      }
    });
  };

  return (
    <div className="xs:p-2 sm:p-2 md:p-5 lg:py-5 xl:py-5 px-28 min-h-screen">
      <label className="mb-3 text-3xl font-bold">My Cart</label>

      <div id="empty" className="text-center">
        <img
          src="../Questions-rafiki 36AE54.png"
          className="w-1/3 ml-auto mr-auto"
        />
        <label className="text-3xl font-black">Your Cart Is Empty</label>
      </div>

      {carts.map((cart) => (
        <div
          key={cart.id}
          className="items flex justify-between mb-3 border-2 border-green-800 rounded-3xl"
        >
            <div id="preview-info" className="flex gap-2">
            <div>
              <img
                src={cart.image}
                className="w-36 aspect-[1/1] rounded-tl-3xl rounded-bl-3xl"
              />
            </div>
            <div className="grid py-2">
              <label className="xs:text-sm sm:text-md text-xl font-bold">
                {cart.name}
              </label>
              <label className="xs:text-xs sm:text-xs text-md">
                IDR {cart.subtotal}
              </label>
              <label className="xs:text-xs sm:text-xs text-md">
                {cart.quantity} pc(s) - {cart.note}
              </label>
            </div>
          </div>
          <div id="button-cart" className="flex">
            <Link
              href={"/carts/" + cart.id}
              id="edit"
              className="xs:px-3 sm:px-3 md:px-4 lg:px-5 xl:px-5 flex items-center
              bg-sky-500 text-white"
            >
              <span className="material-symbols-outlined">edit</span>
            </Link>
            <div
              id="delete"
              className="xs:px-3 sm:px-3 md:px-4 lg:px-5 xl:px-5 flex items-center
              bg-red-500 text-white rounded-tr-3xl rounded-br-3xl hover:cursor-pointer"
              onClick={() => deleteCart(cart.id)}
            >
              <span className="material-symbols-outlined">delete</span>
            </div>
          </div>
        </div>
      ))}

      <div id="pay" className="grid">
        <label>Total :</label>
        <div className="flex justify-between items-center">
          <label className="text-xl">
            <strong>IDR {total}</strong>
          </label>

          <button className="btn btn-success" onClick={payCart}>
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
