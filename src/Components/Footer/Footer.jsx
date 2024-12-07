import { Link } from "react-router-dom";
import { Nav, DireitosAutorais, Container } from "./StyleFooter.jsx";

function Footer() {
  return (
    <Container>
      <Nav>
        <li>
          {" "}
          <Link to="/home"> Política de Privacidade</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/home"> Termos de Uso</Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="https://www.sirio-libanes.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sirio-Libanês
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="https://www.vainaweb.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Vai na web{" "}
          </Link>{" "}
        </li>
      </Nav>
      <DireitosAutorais>
        <p>ConnectCare © 2024 connectcare.app.br</p>
      </DireitosAutorais>
    </Container>
  );
}

export default Footer;
