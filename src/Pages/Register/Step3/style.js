import styled from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const BoxTitle = styled.section`
  h4 {
    width: 80%;
    font-weight: 400;

    strong {
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    h4 {
      width: 100%;
      text-align: center;
    }
  }
`

export const BoxForm = styled.section`
  width: 100%;
  margin: 1rem;

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
      border: 1px solid var(--tertiary);
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
    width: 100%;

    form {
      gap: 0.25rem;

      input {
        padding: 8px;
      }
    }
  }
`

export const FormRow = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const FormColl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;

    .house-number {
      width: 70%;
      margin-left: 1rem;
    }
  }
`

export const SelectState = styled.select`
  padding: 10px 35px;
  margin: 5px 0;
  border-radius: 12px;
  border: 1px solid var(--tertiary);

  &:focus {
    outline: none;
  }

  option {
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    width: 80%;
    margin-left: 1rem;
  }
`