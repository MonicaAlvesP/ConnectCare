import { useState } from "react";
import { useForm } from "react-hook-form";

export const Step1 = () => {
  const [cpf, setCpf] = useState('');
  const { register } = useForm();
  const [cpfError, setCpfError] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const validateCpf = (inputCpf) => {
    if (inputCpf.length !== 11 || !inputCpf.match(/^\d+$/)) {
      setCpfError('CPF inválido');
      return false;
    }
    setCpfError('');
    return true;
  };

  return (
    <section>
      <h4 style={{ marginBottom: '16px' }}>
        Boas-vindas! Para iniciarmos seu cadastro, informe os{" "}
        <strong>dados da conta</strong>
      </h4>
      <div>
        <label>CPF</label>
        <input
          type="text"
          placeholder='digite seu CPF'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          onBlur={() => validateCpf(cpf)}
        />
        {cpfError && <span style={{ color: 'red' }}>{cpfError}</span>}

        <labe>Data de Nascimento</labe>
        <input
          type="date"
          placeholder="data de nascimento"
          onChange={(e) => setBirthDate(e.target.value)}
          value={birthDate}
          {...register("birthDate", { required: true })}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder='digite sua senha'
        />
        <label>Confirmação de Senha</label>
        <input
          type="password"
          placeholder='confirme sua senha'
        />
      </div>
    </section>
  );
};