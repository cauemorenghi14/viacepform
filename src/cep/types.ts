import { z } from "zod";
import { schemaForm } from "./schema";

export type FormProps = z.infer<typeof schemaForm>;

export type ViacepProps = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}