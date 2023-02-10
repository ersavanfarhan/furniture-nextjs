import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import { ALL_PRODUCT, CART_PRODUCT } from "../../utils/api";

export default function Detail() {
  const router = useRouter();
  const [detail, setDetail] = useState<{
    price: number;
    name: string;
    image: string;
    description: string;
  }>({ price: 0, name: "", image: "", description: "" });

  useEffect(() => {
  const ID :any = router.query.productID;
  
  axios.get(ALL_PRODUCT + ID)
        .then((response) => {
          setDetail(response.data)
          // console.log(response.data)
        })
  }, [router.isReady]);

  // Add To Cart Function
  const [quantity, setQuantity] = useState<any>('');
  const [note, setNote] = useState<string>('');

  const addCart = async (e:any) => {
    e.preventDefault();
    if (quantity) {
      const order = {
        name: detail.name,
        quantity: quantity,
        note: note,
        image: detail.image,
        price : detail.price,
        subtotal: detail.price*quantity,
      };
      try {
        await axios.post(CART_PRODUCT, order);
        swal({
          title: "Success",
          text: "Your product has been added",
          icon: "success"
        });
      } catch (e) {}
    } else {
      swal({
        title: "Info",
        text: "Please fill the quantity",
        icon: "error"
      });
    }
  };

  return (
    <div className="xs:p-2 sm:p-2 md:p-5 lg:py-5 xl:py-5 px-28 min-h-screen"> 
      <label className="text-2xl lg:text-3xl xl:text-3xl font-black">
        Product Detail
      </label>
      <div className="xs:grid sm:grid flex w-full gap-3 mt-3">
        <img
          src={detail.image}
          className="xs:w-full sm:w-full w-1/2 rounded-2xl aspect-[4/3]"
        />
        <div id="info">
          <div id="name" className="grid">
            <label className="text-xl lg:text-2xl xl:text-3xl font-bold">
              {detail.name}
            </label>
            <label className="text-md">IDR {detail.price}</label>
          </div>

          <div id="description" className="py-3">
            <label className="text-xl font-bold">Description</label>
            <p className="text-justify italic"> {detail.description}
            </p>
          </div>

          <div id="variant">
            <label className="text-xl font-bold">Variant</label>
            <div id="form" className="grid gap-3">
              <Form.Control
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                placeholder="Enter quantity"
                min="1"
              />
              <Form.Floating>
                <Form.Control 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                type="text"/>
                <label>Notes</label>
              </Form.Floating>

              <Button variant="success" className="bg-green-600 border-none" onClick={addCart}>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
