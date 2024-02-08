import axios from "axios";

interface PetsProps {
  id?: string;
  nome: string;
  idade: number;
  especie: string;
  raca: string;
  adocao: boolean;
}

export const getPets = async () => {
  const response = await axios.get<PetsProps[]>("http://localhost:3001/pets/");

  return response.data;
};

export const postPets = async (petsData: PetsProps[]) => {
  const response = await axios.post("http://localhost:3001/pets/", petsData);

  return response.data;
};
