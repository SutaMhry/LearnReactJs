import { ProductCart } from "../components/ProductCart";
import { axiosInstance } from "../lib/axios";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { use } from "react";

const productsRaw = [
  {
    name: "Dark t-shirt",
    price: 100000,
    stock: 5,
    image:
      "https://media.istockphoto.com/id/483960103/id/foto/kaos-hitam-kosong-depan-dengan-jalur-kliping.jpg?s=612x612&w=0&k=20&c=o0LjeucE_FTs7-7Z_DU1JFyyqfseJYLsf3Wbb-QsBJI=",
  },
  {
    name: "White t-shirt",
    price: 150000,
    stock: 0,
    image:
      "https://media.istockphoto.com/id/482948743/id/foto/kaos-putih-kosong-depan-dengan-jalur-kliping.jpg?b=1&s=612x612&w=0&k=20&c=nMgLCx5WHxAhtYjT4iwNkZDbR226nBOjTc8ZQdLjcSY= ",
  },
];

const HomePage = () => {

  const [productIsLoading, setProductIsLoading] = useState(false);

  const [products, setProducts] = useState([])
  
  const productsList = products.map((product) => {
    return (
      <ProductCart
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        stock={product.stock}
      />
    );
  });

  const fetchProducts = async () => {
    setProductIsLoading(true);
    try {
      const response = await axiosInstance.get("/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setProductIsLoading(false);
    }
  }

  // Mount fetchProducts when first render
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
      <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
        <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Become a trend-setter with us
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foregorund">
            E-Commerce provides you with the finest clothings and ensure your
            confidence throughout your days.
          </p>
        </div>

        {
          productIsLoading ? <p>Loading...</p> : <div className="grid grid-cols-2 gap-4">{productsList}</div>
        }

      </main>
    </>
  );
};

export default HomePage;
