import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import UndrawEnergizer from "../../assets/undraw_energizer.svg";
import { ButtonBack, ButtonNext, ButtonsSteps, ImageContainer, MainContainer, StepBox, StepsActive } from "./style";

const steps = ["", "", ""];

export const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return "Passo desconhecido";
    }
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <MainContainer>
      <ImageContainer>
        <img src={UndrawEnergizer} alt="undraw_energizer" />
      </ImageContainer>

      <StepBox>
        <StepsActive>
          {steps.map((_, index) => (
            <div key={index} className="step-container">
              <div className={`circle ${index === activeStep ? "active" : ""}`}></div>
              {index < steps.length - 1 && <div className="line"></div>}
            </div>
          ))}
        </StepsActive>

        <div>{renderStepContent(activeStep)}</div>

        <ButtonsSteps>
          <ButtonBack onClick={handleBack} disabled={activeStep === 0}>
            Voltar
          </ButtonBack>
          <ButtonNext onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
          </ButtonNext>
        </ButtonsSteps>
      </StepBox>
    </MainContainer>
  );
};
