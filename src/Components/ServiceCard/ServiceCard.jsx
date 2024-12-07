import { Link } from "react-router-dom";
import calendarIcon from "../../assets/calendarIcon.png";
import calendarChecked from '../../assets/calendarIconCheck.png';
import MedicalHistory from '../../assets/medic-history.png';
import Profile from '../../assets/profile.png';
import ManageDependents from '../../assets/manage-dependents.png';
import { Box } from "./StyleServiceCard.jsx";

function ServiceCard() {
  return (
    <>
      <Box>
        <img src={calendarIcon} alt="Agendar consultas" />
        <Link to="/agendamento">Agendar Consulta</Link>
      </Box>
      <Box>
        <img src={calendarChecked} alt="Consultas já Agendadas" />
        <Link to="/agendamento">Agendamentos</Link>
      </Box>
      <Box>
        <img src={MedicalHistory} alt="Seu Historico Medico" />
        <Link to="/agendamento">Histórico Médico</Link>
      </Box>
      <Box>
        <img src={Profile} alt="Seu perfil" />
        <Link to="/agendamento">Perfil</Link>
      </Box>
      <Box>
        <img src={ManageDependents} alt="Gerenciarmento do seu dependente" />
        <Link to="/agendamento">Gerenciar Dependentes</Link>
      </Box>
    </>
  );
}

export default ServiceCard;
