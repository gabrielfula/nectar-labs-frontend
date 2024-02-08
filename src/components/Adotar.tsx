import axios from "axios";
import { Button } from "./ui/button";

interface AdotarProps {
  id: string;
}

export default function Adotar({ id }: AdotarProps) {
  const data = {
    adocao: true,
  };

  const handlePut = () => {
    try {
      axios.put(`http://localhost:3001/pets/adopt/${id}`, data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-right">
        <Button className="px-5 h-7" onClick={handlePut}>
          Adotar
        </Button>
      </div>
    </>
  );
}
