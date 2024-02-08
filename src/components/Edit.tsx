import { deletePets } from "@/api/api";
import axios from "axios";
import { Trash } from "lucide-react";

interface EditProps {
  id: string;
}

export default function Edit({ id }: EditProps) {
  const handleDelete = async () => {
    try {
      await deletePets(id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button>
        <Trash size={20} strokeWidth={1.25} onClick={handleDelete} />
      </button>
    </>
  );
}
