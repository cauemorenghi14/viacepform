import { useForm } from "react-hook-form";
import { FormProps, ViacepProps } from "./types";
import { schemaForm } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import axios from "axios";

export const useCep = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        cep: "",
        rua: "",
        numero: "",
        cidade: "",
        estado: "",
        complemento: "",
        bairro: "",
      },
    },
  });

  const handleSetData = useCallback((data: ViacepProps) => {
    setValue("address.cidade", data.localidade);
    setValue("address.bairro", data.bairro);
    setValue("address.rua", data.logradouro);
    setValue("address.estado", data.uf);
    setValue("address.complemento", data.complemento);
  }, []);

  const handleFetchAddress = useCallback(async (cep: string) => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    handleSetData(data);
  }, []);

  const cep = watch("address.cep");

  useEffect(() => {
    setValue("address.cep", cep);
    if (cep.length !== 9) return;

    handleFetchAddress(cep);
  }, [handleFetchAddress, cep]);

  const handleFormSubmit = (data: any) => {
    console.log(data)
  }

  return {
    register, handleSubmit, errors, handleFormSubmit
  };
};
