import "./NextSection.css";

import img1 from "../../assets/1.jpeg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpeg";
import img15 from "../../assets/15.jpeg";
import img16 from "../../assets/16.jpeg";
import img17 from "../../assets/17.jpeg";
import img18 from "../../assets/18.jpeg";
import img19 from "../../assets/19.jpeg";
import img2 from "../../assets/2.jpg";
import img20 from "../../assets/20.jpeg";
import img21 from "../../assets/21.jpeg";
import img22 from "../../assets/22.jpeg";
import img23 from "../../assets/23.jpeg";
import img24 from "../../assets/24.jpeg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpeg";

interface Void {
  onComplete?: () => void;
}

const GallerySection = ({ onComplete }: Void) => {
  return (
    <div className="display">
      <div>
        <h1>UM POUCO DE NOSSAS MEMÓRIAS</h1>
      </div>
      <div className="galeria">
        <img className="img" src={img1} />
        <img className="img" src={img2} />
        <img className="img" src={img3} />
        <img className="img" src={img4} />
        <img className="img" src={img5} />
        <img className="img" src={img6} />
        <img className="img" src={img7} />
        <img className="img" src={img8} />
        <img className="img" src={img9} />
        <img className="img" src={img10} />
        <img className="img" src={img11} />
        <img className="img" src={img12} />
        <img className="img" src={img13} />
        <img className="img" src={img14} />
        <img className="img" src={img15} />
        <img className="img" src={img16} />
        <img className="img" src={img17} />
        <img className="img" src={img18} />
        <img className="img" src={img19} />
        <img className="img" src={img20} />
        <img className="img" src={img21} />
        <img className="img" src={img22} />
        <img className="img" src={img23} />
        <img className="img" src={img24} />
      </div>
      <div>
        <h2>
          Amor, te amo demais. Depois que você entrou na minha vida, tudo mudou.
          Me sinto muito grato todos os dias por poder namorar com você. Minha
          linda, minha gostosa, você é sensacional, meu amor. Peço desculpas se
          não atendi às suas expectativas e se não ando atendendo. Prometo
          melhorar para te fazer feliz hoje e sempre, se me permitir continuarei
          cuidando de você, com o maior amor do mundo vida (as vezes vou dar
          broncas porque você não comeu tudo, ou que esqueceu de beber água,
          desculpa eu sei que sou chato e deve ser dificil lidar comigo, mas eu
          penso sempre no seu bem meu amor, eu sempre coloco você em primeiro
          lugar e depois eu). Você merece o mundo, meu amor, e eu gostaria de
          estar ao seu lado até o fim.
        </h2>
        <h3>Você aceita namorar comigo ??</h3>
        <div className="actions">
          <button
            className="success"
            onClick={() => onComplete && onComplete()}
          >
            Claro bora renovar esses votos de 1 ano
          </button>
          <button
            className="error"
            onClick={() =>
              window.alert(
                "Desculpa moça mas esse botão não esta funcionando no momento, que tal tentar o outro hein ?"
              )
            }
          >
            Não te suporto mais !!!!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
