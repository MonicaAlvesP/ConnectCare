import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 15vh;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    all: unset;
    font-weight: 700;
  }

  a:hover {
    cursor: pointer;
    color: var(--tertiary);
  }
`;

export const DireitosAutorais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  font-weight: 600;
  background-color: var(--primary);
  color: var(--background);
`;