import { DataProps } from "@/components/Adotar";
import { CreateClientSchema } from "@/components/CreatePet";
import api from "@/service/http";
import { PetsProps } from "@/types/types";

export const getPets = async () => {
  const response = await api.get<PetsProps[]>("/pets/");

  return response.data;
};

export const postPets = async (pets: CreateClientSchema) => {
  const response = await api.post("/pets/", pets);

  return response.data;
};

export const deletePets = async (id: string) => {
  await api.delete(`/pets/${id}`);
};

export const updatePets = async (id: string, data: DataProps) => {
  await api.put(`/pets/adopt/${id}`, data);
};
