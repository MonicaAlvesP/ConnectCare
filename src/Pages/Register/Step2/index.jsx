import { Controller, useForm } from "react-hook-form";
import { Box, BoxTitle, BoxForm, SelectBox } from './style';

export const Step2 = () => {

  const { register, control } = useForm();

  return (
    <Box>
      <BoxTitle>
        <h4>
          Agora, por favor preencha as seguintes
          <strong> informações pessoais</strong>
        </h4>
      </BoxTitle>

      <BoxForm>
        <form action="">
          <label htmlFor="name">Nome Completo</label>
          <input
            id="name"
            type="text"
            placeholder="Nome Completo"
            {...register("name", {required: true})}
          />

          <label htmlFor="name-social">Nome Social <span>(opcional)</span></label>
          <input 
            id="name-social"
            type="text"
            placeholder="Nome Social"
          />
          <label htmlFor="gender">Gênero</label>
          <SelectBox>
            <Controller
              id="gender"
              name="gender"
              control={control}
              defaultValue="male"
              render={({ field }) => (
                <select {...field} className="select" defaultValue="male">
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                  <option value="transFemale">Trans Feminino</option>
                  <option value="transMale">Trans Masculino</option>
                  <option value="nonBinary">Não Binário</option>
                  <option value="preferNoToSay">Prefiro não dizer</option>
                </select>
              )}
            />
          </SelectBox>

          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </form>
      </BoxForm>
    </Box>
  )
}
