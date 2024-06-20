import { useCep } from "./cep/useCep";

export const App = () => {
  const { register, handleSubmit, handleFormSubmit, errors } = useCep()
  return (
    <div className="App">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="text" {...register("address.cep")} placeholder="cep" />
        {errors.address?.cep && <span>{errors.address.cep.message}</span>}

        <input type="text" {...register("address.rua")} placeholder="rua" />
        {errors.address?.rua && <span>{errors.address.rua.message}</span>}

        <input
          type="text"
          {...register("address.numero")}
          placeholder="numero"
        />
        {errors.address?.numero &&
         <span>{errors.address.numero.message}</span>}

        <input
          type="text"
          {...register("address.bairro")}
          placeholder="bairro"
        />
        {errors.address?.bairro && <span>{errors.address.bairro.message}</span>}

        <input
          type="text"
          {...register("address.complemento")}
          placeholder="complemento"
        />
        {errors.address?.complemento && (
          <span>{errors.address.complemento.message}</span>
        )}

        <input
          type="text"
          {...register("address.cidade")}
          placeholder="cidade"
        />
        {errors.address?.cidade && <span>{errors.address.cidade.message}</span>}

        <input
          type="text"
          {...register("address.estado")}
          placeholder="estado"
        />
        {errors.address?.estado && <span>{errors.address.estado.message}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
