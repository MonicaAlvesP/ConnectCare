import { Controller, useForm } from "react-hook-form";

export const Step3 = () => {
  const { register, control } = useForm();

  return (
    <div>
      <h4>
        Para encerrar, precisamos de algumas{" "}
        <strong>informações para contato</strong>
      </h4>

      <div>
        <div>
          <label>CEP</label>
          <input
            type="text"
            {...register("cep", { required: true })}
          />
        </div>
        <div>
          <label>Estado</label>
          <Controller
            name="estado"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
                <option value="">
                  <em>None</em>
                </option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                <option value="RS">RS</option>
              </select>
            )}
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Cidade"
          {...register("cidade", { required: true })}
        />
        <input
          type="text"
          placeholder="Logradouro"
          {...register("logradouro", { required: true })}
        />
        <div>
          <input
            type="text"
            placeholder="Bairro"
            {...register("bairro", { required: true })}
          />
          <input
            type="text"
            placeholder="Número"
            {...register("numero", { required: true })}
          />
        </div>
        <input
          type="text"
          placeholder="Complemento"
          {...register("complemento")}
        />
        <input
          type="text"
          placeholder="Celular"
          {...register("celular", { required: true })}
        />
      </div>
    </div>
  );
};
