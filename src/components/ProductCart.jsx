import { useState, useEffect } from "react"
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io"
import { Link } from "react-router-dom";

export const ProductCart = ({image, name, price, stock, id}) => {

  const [qty, setQty] = useState(0);

  const incrementQty = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  const decrementQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  // // Mount
  // useEffect(() => {
  //   alert("COMPONENT DID MOUNT")
  // }, []);

  // // UPDATE
  // useEffect(() => {
  //   alert("COMPONENT DID UPDATE")
  // }, [qty]);

  // useEffect(() => {
  //   return () => {
  //     alert("COMPONENT WILL UNMOUNT")
  //   }
  // }, [])

  return (
    <div className="p-4 border rounded md:max-w-96 flex flex-col gap-4">
      <Link to={"/product/" + id } className="aspect-square w-full overflow-hidden">
        <img
          className="w-full"
          src={image}
          alt="product"
        />
      </Link>

      <Link to={"/product/" + id }>
        <p className="text-md">{name}</p>
        <p className="text-xl font-semibold">Rp {price.toLocaleString('id-ID')}</p>
        <p className="text-muted-foreground text-sm">In Stock: {stock}</p>
      </Link>

      <div className="flex flex-col gap-2">
        {/* Button Qty */}
        <div className="flex justify-between items-center">
          <Button disabled={qty <= 0} onClick={decrementQty} size="icon" variant="ghost">
            <IoIosRemove className="h-6 w-6" />
          </Button>
          <p  className="text-lg font-bold">{qty}</p>
          <Button disabled={qty >= stock} onClick={incrementQty} size="icon" variant="ghost">
            <IoIosAdd className="h-6 w-6"/>
          </Button>
        </div>
        {/* Button add to cart */}
        <Button disabled={!stock} className="w-full">
          {
            stock > 0 ? "Add To Cart" : "Out Of Stock"
          }
          </Button>
      </div>
    </div>
  );
};
