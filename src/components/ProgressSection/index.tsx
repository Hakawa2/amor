import { useEffect, useState } from "react";
import "./Progress.css";

interface Void {
  onComplete: () => void;
}

const ProgressSection = ({ onComplete }: Void) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return old + 1;
      });
    }, 30); // velocidade da barra

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="progress-container">
      <p className="text">CARREGANDO MEMÓRIAS...</p>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressSection;
