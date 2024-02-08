import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PetItem from "./PetItem";

import { useEffect, useState } from "react";
import { getPets } from "@/api/api";
import { PetsProps } from "@/types/types";
import CreatePet from "./CreatePet";

export default function PetList() {
  const [pets, setPets] = useState<PetsProps[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataAxios = await getPets();
        console.log(dataAxios);
        setPets(dataAxios);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CreatePet />
      <Table>
        <TableCaption>
          {pets.length <= 1 ? (
            <p>Nenhum pet registrado até o momento.</p>
          ) : (
            <p>Uma lista de todos os pets registrados.</p>
          )}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Edit</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>Espécie</TableHead>
            <TableHead>Status da Adoção</TableHead>
            <TableHead>Raça</TableHead>
          </TableRow>
        </TableHeader>
        {pets.map((pet) => (
          <PetItem
            nome={pet.nome}
            key={pet.id}
            id={pet.id}
            raca={pet.raca}
            especie={pet.especie}
            idade={pet.idade}
            adocao={pet.adocao}
          />
        ))}
      </Table>
    </>
  );
}
