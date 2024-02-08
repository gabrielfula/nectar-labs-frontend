import { z } from "zod";

export interface PetsProps {
  id: number;
  nome: string;
  idade: number;
  especie: string;
  raca: string;
  adocao: boolean;
}

export const createClientSchema = z.object({
  nome: z.string().nonempty("Nome é obrigatório"),
  especie: z.string().nonempty("Espécie é obrigatório"),
  raca: z.string().nonempty("Raça é obrigatório"),
  idade: z.number(),
  adocao: z.string().nonempty("Escolha o status da adoção."),
});
