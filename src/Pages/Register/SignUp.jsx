import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import UndrawEnergizer from "../../assets/undraw_energizer.svg";

const steps = ["Informações Básicas", "Endereço", "Confirmação"];

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
      navigate("/home");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <img src={UndrawEnergizer} alt="undraw_energizer" />
      <div>
        {steps.map((label, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {index === activeStep ? <b>{label}</b> : label}
          </div>
        ))}
      </div>
      <div>
        {renderStepContent(activeStep)}
        <div>
          <button onClick={handleBack} disabled={activeStep === 0}>
            Voltar
          </button>
          <button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  );
};
