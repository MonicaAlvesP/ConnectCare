import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import UndrawEnergizer from "../../assets/undraw_energizer.svg";
import { ButtonBack, ButtonNext, ButtonsSteps, ImageContainer, MainContainer, StepBox, StepsActive } from "./style";


const steps = ["1", "2", "3"];

export const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepStatus, setStepStatus] = useState([false, false, false]);  // Step completion status
  const navigate = useNavigate();

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 updateStatus={(status) => updateStepStatus(0, status)} />;
      case 1:
        return <Step2 updateStatus={(status) => updateStepStatus(1, status)} />;
      case 2:
        return <Step3 updateStatus={(status) => updateStepStatus(2, status)} />;
      default:
        return "Passo desconhecido";
    }
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/home");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const updateStepStatus = (stepIndex, status) => {
    setStepStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[stepIndex] = status;
      return newStatus;
    });
  };

  return (
    <MainContainer>
      <ImageContainer>
        <img src={UndrawEnergizer} alt="undraw_energizer" />
      </ImageContainer>

      <StepBox>
        <StepsActive>
          {steps.map((label, index) => (
            <div key={index}>
              <span
                style={{
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  marginRight: "10px",
                  backgroundColor: stepStatus[index] ? "green" : "blue",
                }}
              ></span>
              {index === activeStep ? <b>{label}</b> : label}
            </div>
          ))}
        </StepsActive>

        <div>
          {renderStepContent(activeStep)}
        </div>

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