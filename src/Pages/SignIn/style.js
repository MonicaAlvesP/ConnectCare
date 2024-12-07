import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`

export const ImageContainer = styled.section`
  height: 100%;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);

  img {
    width: 60%;
  }

  @media(max-width: 768px) {
    display: none;
  }
`

export const FormContainer = styled.section`
  width: 35%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25vh;
  line-height: 1.5;
  margin-top: 2rem;

  img {
    height: 15vh;
  }

  @media(max-width: 768px) {
    margin-top: 2rem;
  }
`

export const FormBox = styled.div`
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-weight: 600;
    }

    input {
      width: 100%;
      padding: 12px;
      border-radius: 15px;
      border: solid 1px var(--tertiary);
    }

    a{
      text-align: end;
      font-size: 12px;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;

  label {
    font-weight: 600;
    width: 100%;
    margin-left: 0.5rem;
  }
`
export const Button = styled.button`
  padding: 8px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? 'var(--gray-3)' : 'var(--tertiary)')};
  color: ${(props) => (props.disabled ? 'lightgray' : 'white')};
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'var(--gray-3)' : 'var(--secondary)')};
    color:  ${(props) => (props.disabled ? 'lightgray' : 'var(--gray-1)')};;
  }
`

export const ErrorText = styled.span`
  color: var(--error);
  font-size: 10px;
`

export const LinkRegister = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`