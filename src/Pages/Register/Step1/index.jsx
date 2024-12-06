import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, BoxTitle, BoxForm, CheckBox, ErrorText } from './style.js';

export const Step1 = () => {
  const [cpf, setCpf] = useState('');
  const { register } = useForm();
  const [cpfError, setCpfError] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isForeigner, setIsForeigner] = useState(false);
  const [passport, setPassport] = useState('');
  const [passportError, setPassportError] = useState('');

  const validatePassport = (inputPassport) => {
    if (inputPassport.length < 6) {
      setPassportError('Passaporte inválido');
      return false;
    }
    setPassportError('');
    return true;
  };

  const validateCpf = (inputCpf) => {
    if (inputCpf.length !== 11 || !inputCpf.match(/^\d+$/)) {
      setCpfError('CPF inválido');
      return false;
    }
    setCpfError('');
    return true;
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
      return false;
    }
    setPasswordError('');
    return true;
  };

  return (
    <Box>
      <BoxTitle>
        <h4>
          Boas-vindas! Para iniciarmos seu cadastro, informe os
          <strong> dados da conta</strong>
        </h4>
      </BoxTitle>

      <BoxForm>
        <form action="">
          <CheckBox>
            <div>
              <input
                type="checkbox"
                checked={isForeigner}
                onChange={(e) => setIsForeigner(e.target.checked)}
              />
            </div>
            <label>Sou estrangeiro</label>
          </CheckBox>
          {!isForeigner ? (
            <>
              <label>CPF</label>
              <input
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                onBlur={() => validateCpf(cpf)}
                className={cpfError ? 'error' : ''}
              />
              {cpfError && <ErrorText>{cpfError}</ErrorText>}
            </>
          ) : (
            <>
              <label>Passaporte</label>
              <input
                placeholder="Digite seu número de passaporte"
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
                onBlur={() => validatePassport(passport)}
                className={passportError ? 'error' : ''}
              />
              {passportError && <ErrorText>{passportError}</ErrorText>}
            </>
          )}

          <label>Data de Nascimento</label>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          <label>Confirmação de Senha</label>
          <input
            type="password"
            placeholder='confirme sua senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validatePassword}
            className={passwordError ? 'error' : ''}
          />
          {passwordError && <ErrorText>{passwordError}</ErrorText>}
        </form>
      </BoxForm>
    </Box>
  );
};