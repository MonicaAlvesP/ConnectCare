import styled from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`
export const BoxTitle = styled.section`
  margin: 1rem 0;

  h4 {
    width: 80%;
    font-weight: 400;
     strong {
      font-weight: 700;
     }
  }
`

export const BoxForm = styled.section`
  width: 100%;
  margin: 2rem;
  
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    label {
      font-weight: 600;
    }

    input {
      padding: 10px;
      margin: 5px 0;
      border-radius: 12px;
      border: 1px solid var(--tertiary)
    }
  }
`

export const SelectBox = styled.div`
  select {
    width: 100%;
    padding: 10px;
    border-radius: 12px;
    border: solid 1px var(--tertiary);
  }
`