import React from "react";
import Backbanner from "../../../assets/pictures/about/about_(1).jpg";
import Title from "../../../components/title/title";

export default function About() {
  return (
    <section className="about" id="SOBRE">
      <div className="about__content">
        <picture className="about__content--picture">
          <img src={Backbanner} alt="Plantação de milhos no fundo" />
        </picture>
      </div>
      <div className="about__description">
        <Title title="SOBRE" subtitle="PLANTANDO O FUTURO HOJE" />
        <p className="about__description--parg">
          Acreditamos que pequenas atitudes, somadas, geram grandes
          transformações. A Verde Ação nasceu de uma inquietação comum: a
          urgência em agir pelo nosso planeta. Em um mundo onde os desafios
          climáticos são globais, entendemos que a mudança efetiva começa na
          nossa comunidade. Não podíamos mais ser espectadores.
        </p>
        <p className="about__description--parg">
          Mais do que uma organização, somos uma plataforma de ação comunitária,
          criada para ser a ponte entre sua vontade de ajudar e o impacto
          positivo que o meio ambiente precisa urgentemente.
        </p>
      </div>
    </section>
  );
}
