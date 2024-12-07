import Header from "../../Components/Header/Header.jsx";
import doctors from "../../assets/medical.png";
import { Content, Box, MainContainer, BoxServices, BoxNews } from "./StyleHome.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ServiceCard from "../../Components/ServiceCard/ServiceCard.jsx";
import News from "../../assets/News.png";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Bem-vindo à ConnectCare</h1>
        <Content>
          <div className="box-content">
            <h2>Sua saúde é nossa prioridade!</h2>
            <p>Com a ConnectCare, cuidar da sua saúde ficou mais simples, rápido e acessível.
              Descubra como é fácil estar no controle da sua qualidade de vida com apenas alguns cliques.</p>
            <p>Estamos aqui para transformar sua experiência de cuidado em algo prático e personalizado, feito especialmente para você.</p>
          </div>
          <img
            src={doctors}
            alt="Ilustração de dois médicos, um homem e uma mulher"
          />
        </Content>
        <Box>
          <p>Descubra tudo o que a ConnectCare pode oferecer!</p>
        </Box>
        <h2>Conheça nossos serviços</h2>
        <BoxServices>
          <ServiceCard />
        </BoxServices>
        <BoxNews>
          <h2>Novidades</h2>
          <p>
            Estamos sempre empenhados em fornecer acesso fácil e conveniente a
            serviços de saúde de alta qualidade. Em breve, traremos novas
            funcionalidades para melhorar ainda mais a sua experiência.
          </p>
          <img src={News} alt="Acesse nosso site pelo celular" />
        </BoxNews>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Home;
