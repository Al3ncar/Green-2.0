import React from "react";

import Header from "./layouts/header/header";
import About from "./layouts/main/about/about";
import Statistics from "./layouts/main/about/statistics";
import Category from "./layouts/main/category/category";
import Comments from "./layouts/main/comments/comments";


// import CardImg1 from "./assets/pictures/cards/card_1.jpg";
// import CardImg2 from "./assets/pictures/cards/card_2.jpg";
// import CardImg3 from "./assets/pictures/cards/card_3.png";
// import CardImg4 from "./assets/pictures/cards/card_4.jpg";
// import CardSlider from "./components/card_list/card_list";

export default function GreenAction() {
  // const cardData = [
  //   {
  //     imgSrc: CardImg1,
  //     alt: "Pessoas plantando mudas",
  //     title: "Plantio de mudas",
  //     text: "Cada muda plantada ajuda a restaurar o meio ambiente.",
  //   },
  //   {
  //     imgSrc: CardImg2,
  //     alt: "Coleta de lixo",
  //     title: "Coleta de lixo",
  //     text: "Manter as praias limpas é essencial para a vida marinha.",
  //   },
  //   {
  //     imgSrc: CardImg3,
  //     alt: "Reciclagem de material",
  //     title: "Reciclagem",
  //     text: "Separar o lixo ajuda a diminuir o impacto ambiental.",
  //   },
  //   {
  //     imgSrc: CardImg4,
  //     alt: "Energia solar",
  //     title: "Energia Limpa",
  //     text: "O uso de energia solar é um passo para o futuro.",
  //   },
  // ];

  return (
    <>
      <Header />
      <Statistics />
      <About />
      <Category />
      <Comments />
      {/* <footer>
        <p>© todos os direitos reservados</p>
      </footer> */}
    </>
  );
};