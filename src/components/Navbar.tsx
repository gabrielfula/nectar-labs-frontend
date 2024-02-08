import { PawPrint } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="shadow-lg py-5 p-3">
        <div className="flex gap-2 items-center ">
          <p className="font-bold">Pets</p>
          <PawPrint size={24} strokeWidth={1.25} />
        </div>
      </nav>
    </>
  );
}
