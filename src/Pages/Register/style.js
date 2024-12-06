import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`

export const ImageContainer = styled.section`
  width: 60%;
  height: 100%;
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

export const StepBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 3rem;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const StepsActive = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3%;
 
`
export const ButtonsSteps = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ButtonBack = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? 'var(--gray-3)' : 'var(--tertiary)')};
  color: ${(props) => (props.disabled ? 'lightgray' : 'white')};
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'var(--gray-3)' : 'var(--secondary)')};
    color:  ${(props) => (props.disabled ? 'lightgray' : 'var(--gray-1)')};;
  }
`
export const ButtonNext = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: var(--tertiary);
  color: #fff;
  `
