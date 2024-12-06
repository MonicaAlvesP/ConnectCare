import { useState } from 'react';
import { Link } from 'react-router-dom';
import Undraw from "../../assets/undraw_medicine.svg";
import logo from "../../assets/logo.svg";
import { Main, ImageContainer, FormContainer, ContentLogo, FormBox, CheckboxContainer, ErrorText, Button, LinkRegister } from './style';

function SignIn() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword] = useState(false);

  const [isForeigner, setIsForeigner] = useState(false);
  const [passport, setPassport] = useState('');
  const [passportError, setPassportError] = useState(''); // Erro para passaporte

  const validateCpf = (inputCpf) => {
    if (inputCpf.length !== 11 || !inputCpf.match(/^\d+$/)) {
      setCpfError('CPF inválido');
      return false;
    }
    setCpfError('');
    return true;
  };

  const validatePassport = (inputPassport) => {
    if (inputPassport.length < 5) {
      setPassportError('Número do passaporte inválido');
      return false;
    }
    setPassportError('');
    return true;
  };

  const validatePassword = (inputPassword) => {
    if (inputPassword.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = isForeigner
      ? validatePassport(passport) && validatePassword(password)
      : validateCpf(cpf) && validatePassword(password);

    if (isValid) {
      window.location.href = "/home";
    }
  };

  const isFormValid =
    ((!isForeigner && cpf && !cpfError) ||
      (isForeigner && passport && !passportError)) &&
    password && !passwordError;

  return (
    <Main className="main-container">
      <ImageContainer>
        <img src={Undraw} alt="iconlogin" />
      </ImageContainer>

      <FormContainer>
        <ContentLogo>
          <img src={logo} alt="login" className="logo" />
          <h3>Que bom te ver!</h3>
          <p>Por favor, faça login para continuar</p>
        </ContentLogo>

        <FormBox>
          <form onSubmit={handleSubmit}>
            <CheckboxContainer>
              <div>
                <input
                  type="checkbox"
                  checked={isForeigner}
                  onChange={(e) => setIsForeigner(e.target.checked)}
                />
              </div>
              <label>Sou estrangeiro</label>
            </CheckboxContainer>

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

            <label>Senha</label>
            <input
              placeholder="Digite sua senha"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => validatePassword(password)}
              className={passwordError ? 'error' : ''}
            />
            {passwordError && <ErrorText>{passwordError}</ErrorText>}
            <Link>Esqueci minha senha</Link>
            <Button
              type="submit"
              disabled={!isFormValid}
              className={`submit-button ${isFormValid ? 'active' : 'disabled'}`}
            >
              Entrar
            </Button>
          </form>
        </FormBox>
        <LinkRegister>
          <p>Ainda não tem cadastro?</p>
          <Link to="/register" className="register-link">
            Cadastre-se
          </Link>
        </LinkRegister>
      </FormContainer>
    </Main>
  );
}

export default SignIn;
