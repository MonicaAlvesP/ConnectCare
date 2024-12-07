import styled from "styled-components";

export const Box = styled.div`
  background-color: var(--gray-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 25vh;
  border-radius: 30px;
  gap: 1rem;

  &:hover {
    background-color: var(--secondary);
    transition: background-color 0.3s ease;
  }

  img {
    height: 10vh;
  }

  a {
    text-decoration: none;
    all: unset;
    font-weight: 700;
  }

  a:hover {
    cursor: pointer;
    color: var(--tertiary);
    transition: color 0.3s ease;
  }
`;
