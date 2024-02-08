import axios from "axios";
import { Pencil, Trash } from "lucide-react";

interface EditProps {
  id: string;
}

export default function Edit({ id }: EditProps) {
  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:3001/pets/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Trash size={20} strokeWidth={1.25} onClick={handleDelete} />
    </>
  );
}
