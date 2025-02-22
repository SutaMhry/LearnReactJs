import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";

const ProductManagementPage = () => {
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
      <h1>Product Management Page Content</h1>
    </AdminLayout>
  );
};

export default ProductManagementPage;
