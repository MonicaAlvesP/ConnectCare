import { Controller, useForm } from "react-hook-form";

export const Step2 = () => {

  const { register, control } = useForm();

  return (
    <div className="container">
      <h4>
        Agora, por favor preencha as seguintes
        <strong>informações pessoais</strong>
      </h4>
      <div className="box">
        <label className="label">Nome Completo</label>
        <input
          type="text"
          placeholder="Nome Completo"
          className="input"
        />
        <label className="label">Gênero</label>
        <div className="form-control">
          <Controller
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
        </div>

        <label className="label">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          {...register("email", { required: true })}
        />
      </div>
    </div>
  )
}
