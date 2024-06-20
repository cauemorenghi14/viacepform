import { z } from "zod";

export const schemaForm = z
  .object({
    address: z.object({
      cep: z.string().min(9, "Por favor, insira um CEP válido"),
      rua: z.string().min(1, "Por favor, insira uma rua válida"),
      numero: z.string().min(1, "Por favor, insira um número válido"),
      cidade: z.string().min(1, "Por favor, insira uma cidade válida"),
      estado: z.string().min(9, "Por favor, insira um estado válido"),
      complemento: z.string(),
      bairro: z.string().min(1, "Por favor, insira um bairro válido"),
    }),
  })
  .transform((field) => ({
    address: {
      cep: field.address.cep,
      rua: field.address.rua,
      numero: field.address.numero,
      cidade: field.address.cidade,
      estado: field.address.estado,
      complemento: field.address.complemento,
      bairro: field.address.bairro,
    },
  }));
