import styled from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const BoxTitle = styled.div`
  h4 {
    width: 80%;
    font-weight: 400;
     strong {
      font-weight: 700;
     }
  }
`

export const BoxForm = styled.div`
  width: 100%;
  margin: 2rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;


    label {
    font-weight: 700;
  }

  input {
    padding: 10px;
    margin: 5px 0;
    border-radius: 12px;
    border: 1px solid var(--tertiary)
  }
  }
`

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
` 


export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin: 5px;
`