import { Controller, useForm } from "react-hook-form";
import { Box, BoxForm, BoxTitle, FormColl, FormRow, SelectState } from './style';

export const Step3 = () => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <BoxTitle>
        <h4>Para encerrar, precisamos de algumas
          <strong>informações para contato</strong></h4>
      </BoxTitle>

      <BoxForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <FormColl>
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                name="cep"
                placeholder="Digite seu CEP"
                type="text"
                {...register("cep", { required: true })}
              />
            </FormColl>
            <FormColl>
              <label htmlFor="state">Estado</label>
              <Controller
                id="state"
                name="state"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectState {...field}>
                    <option value="">
                      <em>Pernambuco</em>
                    </option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="RS">Rio Grande do Sul</option>
                  </SelectState>
                )}
              />
            </FormColl>
          </FormRow>

          <section>
            <FormColl>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                {...register("cidade", { required: true })}
              />
            </FormColl>
            <FormColl>
              <label htmlFor="neighborhood">Bairro</label>
              <input
                id="neighborhoodt"
                type="text"
                placeholder="Bairro"
                {...register("logradouro", { required: true })}
              />
            </FormColl>

            <FormRow>
              <FormColl>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  placeholder="Endereço"
                  {...register("endereço", { required: true })}
                />
              </FormColl>

              <FormColl>
                <label htmlFor="house-number">Número</label>
                <input
                  id="house-number"
                  type="text"
                  placeholder="Número"
                  className="house-number"
                  {...register("numero", { required: true })}
                />
              </FormColl>
            </FormRow>

            <FormColl>
              <label htmlFor="complement">Complemento</label>
              <input
                id="complement"
                type="text"
                placeholder="Complemento"
                {...register("complemento")}
              />
            </FormColl>

            <FormColl>
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                type="text"
                placeholder="Telefone"
                {...register("telefone", { required: true })}
              />
            </FormColl>
          </section>
        </form>
      </BoxForm>
    </Box>
  );
};
