import { useEffect, useState } from "react";
import "./App.css";
import GallerySection from "./components/GallerySection";
import Intro from "./components/Intro";
import ProgressSection from "./components/ProgressSection";
import SuccessSection from "./components/SuccessSection";

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 10000); // 30s para mostrar a barra
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {step === 0 && <Intro />}
      {step === 1 && <ProgressSection onComplete={() => setStep(2)} />}
      {step === 2 && <GallerySection onComplete={() => setStep(3)} />}
      {step === 3 && <SuccessSection />}
    </div>
  );
}

export default App;
