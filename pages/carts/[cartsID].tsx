import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";

export default function Edit() {
  const router = useRouter();
  const cartsID = router.query.cartsID;
  const [cart, setCart] = useState<{
    price: number;
    subtotal: number;
    name: string;
    image: string;
    quantity: any;
    note: string;
  }>({ price: 0, subtotal: 0, name: "", image: "", quantity: 0, note: "" });

  useEffect(() => {
    const getCart = async () => {
      const { data: res } = await axios.get(
        "http://localhost:3004/carts/" + cartsID
      );
      setCart(res);
    };
    getCart();
  }, []);

  // Update Cart Function
  const [quantity, setQuantity] = useState<any>("");
  const [note, setNote] = useState<string>("");

  const updateCart = async (e:any) => {
    e.preventDefault();
    if (quantity && note) {
      const Update = {
        name: cart.name,
        quantity: quantity,
        note: note,
        image: cart.image,
        price: cart.price,
        subtotal: cart.price * quantity,
      };
      try {
        await axios.put("http://localhost:3004/carts/" + cartsID, Update);
        swal({
          title: "Success",
          text: "Your product has been updated",
          icon: "success",
        });
      } catch (e) {}
    } else {
      swal({
        title: "Info",
        text: "Please fill the form",
        icon: "error"
      });
    }
  };
  

  return (
    <div className="xs:p-2 sm:p-2 md:p-5 lg:py-5 xl:py-5 px-28 min-h-screen">
      <label className="text-2xl lg:text-3xl xl:text-3xl font-black">
        Edit Cart
      </label>
      <div className="xs:grid sm:grid flex w-full gap-5 mt-3">
        <img
          src={"../" + cart.image}
          className="xs:w-full sm:w-full w-1/2 rounded-2xl aspect-[4/3]"
        />
        <div id="info">
          <div id="name" className="grid">
            <label className="text-xl lg:text-2xl xl:text-3xl font-bold">
              {cart.name}
            </label>
            <label className="text-md">IDR {cart.price}</label>
          </div>

          <div id="description" className="py-3">
            <label className="text-xl font-bold">Description</label>
            <p className="text-justify italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed
              animi unde tempora in. Tempora quos vitae magni modi! Aliquam
              illum sint unde doloribus repellendus nemo facilis eligendi omnis
              culpa.
            </p>
          </div>

          <div id="variant">
            <label className="text-xl font-bold">Variant</label>
            <div id="form" className="grid gap-3">
              <Form.Control
                type="number"
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
                placeholder={cart.quantity}
              />
              <Form.Control
                type="text"
                // value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={"note : " + cart.note}
              />

              <Button
                variant="success"
                className="bg-green-600 border-none"
                onClick={updateCart}
              >
                Save Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
