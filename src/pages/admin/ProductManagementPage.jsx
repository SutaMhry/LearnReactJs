import { AdminLayout } from "@/components/layout/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { ChevronsLeft, ChevronsRight, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Pagination, PaginationItem } from "@/components/ui/pagination";
import { useSearchParams } from "react-router-dom";

const ProductManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleNextPage = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", Number(newSearchParams.get("page")) + 1);
    setSearchParams(newSearchParams);
  };

  const handlePreviousPage = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", Number(newSearchParams.get("page")) - 1);
    setSearchParams(newSearchParams);
  };

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          _per_page: 5,
          _page: Number(searchParams.get("page")),
        },
      });
      setHasNextPage(Boolean(response.data.next));
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchParams.get("page")) {
      fetchProducts();
    }
  }, [searchParams.get("page")]);

  useEffect(() => {
    if (!searchParams.get("page")) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", 1);
      setSearchParams(newSearchParams);
    }
  }, []);

  return (
    <AdminLayout
      title="Products Management"
      description="Manage your products here"
      rightSection={
        <Button>
          <IoAdd className="h-6 w-6 mr-2" />
          Add Product
        </Button>
      }
    >
      <Table className="p-4 border rounded">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Priduct Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  Rp {product.price.toLocaleString("id-ID")}
                </TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Ellipsis className="w-6 h-6" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Pagination className="mt-8">
        <PaginationItem>
          <Button
            disabled={searchParams.get("page") == 1}
            onClick={handlePreviousPage}
            variant="ghost"
          >
            <ChevronsLeft className="h-6 w-6 mr-2" />
            Previous
          </Button>
        </PaginationItem>

        <PaginationItem classNamemx-8 fz-sm>
          Page {searchParams.get("page")}
        </PaginationItem>

        <PaginationItem>
          <Button
            disabled={!hasNextPage}
            onClick={handleNextPage}
            variant="ghost"
          >
            Next
            <ChevronsRight className="h-6 w-6 ml-2" />
          </Button>
        </PaginationItem>
      </Pagination>
    </AdminLayout>
  );
};

export default ProductManagementPage;
