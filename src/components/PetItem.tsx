import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { PetsProps } from "@/types/types";
import Edit from "./Edit";
import Adotar from "./Adotar";

export default function PetItem({
  nome,
  id,
  raca,
  especie,
  idade,
  adocao,
}: PetsProps) {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium flex gap-3 items-center">
            <Edit id={id} />
          </TableCell>
          <TableCell>{nome}</TableCell>
          <TableCell>{idade} anos</TableCell>
          <TableCell>{especie}</TableCell>
          <TableCell>
            {adocao === true ? <p>Adotado</p> : <p>Disponível para adoção</p>}
          </TableCell>
          <TableCell>{raca}</TableCell>
          {adocao === true ? null : <Adotar id={id} />}
        </TableRow>
      </TableBody>
    </>
  );
}
