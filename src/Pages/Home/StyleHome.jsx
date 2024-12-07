import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
  }
`

export const Content = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 87vh;

  
  .box-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 35%;
    
    p {
      font-size: 1.5em;
      font-weight: 600;
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: var(--tertiary);

  p {
    font-size: 1em;
    font-weight: 600;
    color: var(--background);
  }
`;

export const BoxServices = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 85%;
  height: 50vh;
`

export const BoxNews = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  background-color: var(--tertiary);
  color: var(--background);
  padding: 5rem;

  p {
    width: 70%;
    text-align: center;
  }

  img {
    width: 70%;
  }
`;