import { PlusCircle } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "./ui/button";
import { createClientSchema } from "@/types/types";
import { z } from "zod";
import { postPets } from "@/api/api";
import { zodResolver } from "@hookform/resolvers/zod";

export type CreateClientSchema = z.infer<typeof createClientSchema>;

export default function CreatePet() {
  const { register, handleSubmit, reset, formState } =
    useForm<CreateClientSchema>({
      resolver: zodResolver(createClientSchema),
    });
  let { errors, isSubmitting, isSubmitted } = formState;

  const [visible, setVisible] = useState(isSubmitted);

  async function newClient(pets: CreateClientSchema) {
    try {
      await postPets(pets);
      setVisible(false);
    } catch (erro) {
      console.log("Cliente não foi criado.");
    }
    window.location.reload();
    reset();
  }

  const validation = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Dialog onOpenChange={validation} open={visible}>
        <DialogTrigger asChild>
          <button>
            <p className="flex gap-2 text-xs items-center uppercase font-bold">
              Novo pet <PlusCircle size={20} />
            </p>
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[[425px]">
          <DialogHeader>
            <DialogTitle>Criar Pet</DialogTitle>
            <DialogDescription>
              Certifique-se de que as informações do pet estejam corretas.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(newClient)} className="space-y-7">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nome" className="text-left">
                Nome
              </Label>
              <Input
                placeholder="Nome do pet"
                className="col-span-3"
                {...register("nome")}
              />
              {errors.nome && (
                <span className="flex text-red-500 text-sm font-bold">
                  {errors.nome.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <Label htmlFor="idade" className="text-left">
                Idade
              </Label>
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Idade do pet"
                  className="col-span-3"
                  {...register("idade")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="especie" className="text-left">
                Espécie
              </Label>
              <div className="space-y-2">
                <Input className="col-span-3" {...register("especie")} />
              </div>
              {errors.especie && (
                <span className="flex text-red-500 text-sm font-bold">
                  {errors.especie.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="price" className="text-left">
                Raça
              </Label>
              <div className="space-y-2">
                <Input className="col-span-3" {...register("raca")} />
              </div>
              {errors.raca && (
                <span className="flex text-red-500 text-sm font-bold">
                  {errors.raca.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="status" className="text-left">
                Status da adoção
              </Label>

              <select
                className="max-w-[180px] rounded border px-3 py-2 text-zinc-600"
                {...register("adocao")}
              >
                <option disabled selected>
                  Adoção
                </option>
                <option value="true">Adotado</option>
                <option value="false">Disponivel para Adoção</option>
              </select>
              {errors.adocao && (
                <span className="flex text-red-500 text-sm font-bold">
                  {errors.adocao.message}
                </span>
              )}
            </div>

            <div className="flex gap-10">
              <Button type="submit" disabled={isSubmitting}>
                Salvar Pet
              </Button>
              <DialogClose asChild>
                <Button type="button" disabled={isSubmitting}>
                  Cancelar
                </Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
