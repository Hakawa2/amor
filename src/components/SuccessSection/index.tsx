import { useEffect, useRef } from "react";
import audio from "../../assets/audio.mp3";
import "./SuccessSection.css";

const SuccessSection = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSong = () => {
    setTimeout(() => {
      console.log("aaa");
      if (audioRef && audioRef.current) {
        audioRef.current.play();
      }
    }, 2000);
  };

  useEffect(() => {
    playSong();
  }, []);

  return (
    <div className="display">
      <h1>AEEEEEEEEEEEEEEE !!!!!!!!!!!!!!!!!</h1>
      <h2>Feliz 1 Ano de namoro meu amorrrrrrrrrrrr</h2>
      <img src="https://i.gifer.com/78nd.gif" />
      <audio ref={audioRef} src={audio} autoPlay hidden />
    </div>
  );
};

export default SuccessSection;
