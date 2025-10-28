import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/bundle";
import "../../style/styles.scss";

import CardImg1 from "../../assets/pictures/cards/card_1.jpg";
import CardImg2 from "../../assets/pictures/cards/card_2.jpg";
import CardImg3 from "../../assets/pictures/cards/card_3.png";
import CardImg4 from "../../assets/pictures/cards/card_4.jpg";

const cardData = [
  {
    imgSrc: CardImg1,
    alt: "Pessoas plantando mudas",
    title: "Plantio de mudas",
    text: "Cada muda plantada ajuda a restaurar o meio ambiente.",
  },
  {
    imgSrc: CardImg2,
    alt: "Coleta de lixo",
    title: "Coleta de lixo",
    text: "Manter as praias limpas é essencial para a vida marinha.",
  },
  {
    imgSrc: CardImg3,
    alt: "Reciclagem de material",
    title: "Reciclagem",
    text: "Separar o lixo ajuda a diminuir o impacto ambiental.",
  },
  {
    imgSrc: CardImg4,
    alt: "Energia solar",
    title: "Energia Limpa",
    text: "O uso de energia solar é um passo para o futuro.",
  },
];

export default function CardSlider() {
  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="card-conteiner--card">
          <figure>
            <img src={card.imgSrc} alt={card.alt} />
          </figure>
          <div className="card-conteiner--card--description">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            <button>Veja mais</button>
          </div>
        </div>
      ))}
    </>
  );
}
