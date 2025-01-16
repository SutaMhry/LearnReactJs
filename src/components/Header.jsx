import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-16 border-b flex items-center justify-between px-8">
      {/* Brand */}
      <p className="text-2xl font-bold hover:cursor-pointer">E-Commerce</p>

      {/* Search Bar */}
      <Input className="max-w-[600px]" placeholder="Search..." />

      {/* BUttons */}
      <div className="flex space-x-4 h-5 items-center">
        <div className="flex space-x-2">
          <Link to="/cart">
            <Button size="icon" variant="ghost">
              <IoCart className="h-6 w-6 " />
            </Button>
          </Link>
          <Button size="icon" variant="ghost">
            <IoHeart className="h-6 w-6 " />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-full" />

        <div className="flex space-x-2">
          <Button>Log In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
