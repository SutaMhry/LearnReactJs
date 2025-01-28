import { Button } from "@/components/ui/button";
import { axiosInstance } from "../lib/axios";
import { useState, useEffect } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailPage = () => {
  const params = useParams();

  const [qty, setQty] = useState(0);

  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    image: "",
  });

  const [productIsLoading, setProductIsLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      setProductIsLoading(true);
      const response = await axiosInstance.get("/products/" + params.productId);
      setProduct(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setProductIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-2">
        {productIsLoading ? (
          <Skeleton className="w-full h-[582px]" />
        ) : (
          <img src={product.image} alt={product.name} className="w-full" />
        )}
        <div className="flex flex-col gap-1 justify-center">
          {productIsLoading ? (
            <Skeleton className="w-[250px] h-[32px]" />
          ) : (
            <h1 className="text-xl">{product.name}</h1>
          )}

          {productIsLoading ? (
            <Skeleton className="w-[250px] h-[48px]" />
          ) : (
            <h3 className="text-3xl font-bold">
              Rp{product.price.toLocaleString("id-ID")}
            </h3>
          )}

          {productIsLoading ? (
            <Skeleton className="w-[350px] h-[120px] mt-4" />
          ) : (
            <p className="text-sm text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a
              repellendus consectetur veritatis, recusandae facere nisi modi
              excepturi error eius id neque est officia, voluptatum accusantium
              ipsum quaerat eos nobis, aliquam sint amet cum! Quae nemo
              cupiditate sit veniam ab officiis temporibus exercitationem. Ullam
              quasi iste, pariatur officiis quaerat natus.
            </p>
          )}

          <div className="flex items-center gap-3 mt-6">
            <Button
              //   disabled={qty <= 0}
              //   onClick={decrementQty}
              size="icon"
              variant="ghost"
            >
              <IoIosRemove className="h-6 w-6" />
            </Button>
            <p className="text-lg font-bold">{qty}</p>
            <Button
              //   disabled={qty >= stock}
              //   onClick={incrementQty}
              size="icon"
              variant="ghost"
            >
              <IoIosAdd className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <Button className="w-full" size="lg">
              Add to cart
            </Button>
            <Button size="icon" variant="ghost">
              <IoHeartOutline className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
