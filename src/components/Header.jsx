import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-transparent justify-between items-center flex-row flex">
        <p className="text-2xl font-bold hover:cursor-pointer">Cerpen</p>
        <div className="flex flex-row items-center gap-4">
            <Button variant="ghost" size="lg">Stored</Button>
            <Button variant="">Home</Button>
            <Button variant="">Category</Button>
        </div>
        <div className="flex flex-row items-center gap-4">
            <Button variant="">Contact</Button>
        </div>
    </header>
  );
};
