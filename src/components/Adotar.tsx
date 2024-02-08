import { Button } from "./ui/button";
import { updatePets } from "@/api/api";

interface AdotarProps {
  id: string;
}
export interface DataProps {
  adocao: boolean;
}

export default function Adotar({ id }: AdotarProps) {
  const data: DataProps = {
    adocao: true,
  };

  const handlePut = async () => {
    try {
      await updatePets(id, data);
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
