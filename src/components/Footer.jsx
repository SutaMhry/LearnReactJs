import { ContactMeButton } from "./ContactMeButton";

export const Footer = () => {
  return (
    <footer className="min-h-16 border-t py-8 flex items-center justify-between px-20">
      <p className="text-xl font-bold">E-Commerce Copright 2024</p>
      <ContactMeButton />
    </footer>
  );
};