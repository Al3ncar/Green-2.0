import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Statistics() {
  const statisticsData = [
    {
      href: "https://www.cnnbrasil.com.br/nacional/norte/desmatamento-ameaca-capacidade-da-amazonia-de-capturar-carbono-diz-estudo/",
      number: "+2.9",
      text: "Relatório alerta que floresta pode deixar de armazenar quase 3 bilhões de toneladas de carbono até 2030",
    },
    {
      href: "https://g1.globo.com/meio-ambiente/noticia/2025/04/25/desmatamento-na-amazonia-degradacao-agosto-2024-marco-2025.ghtml",
      number: "329%",
      text: "No mesmo período, a degradação florestal subiu mais de 329% e bateu um recorde histórico.",
    },
    {
      href: "https://veja.abril.com.br/saude/42-da-populacao-da-amazonia-legal-diz-sofrer-impactos-das-mudancas-climaticas/",
      number: "42%",
      text: "Da populações da Amazônia afirmam já ter sido diretamente afetadas pelas mudanças climáticas",
    },
    {
      href: "https://www.cnnbrasil.com.br/nacional/norte/desmatamento-ameaca-capacidade-da-amazonia-de-capturar-carbono-diz-estudo/",
      number: "+2.9",
      text: "Relatório alerta que floresta pode deixar de armazenar quase 3 bilhões de toneladas de carbono até 2030",
    },
    {
      href: "https://g1.globo.com/meio-ambiente/noticia/2025/04/25/desmatamento-na-amazonia-degradacao-agosto-2024-marco-2025.ghtml",
      number: "329%",
      text: "No mesmo período, a degradação florestal subiu mais de 329% e bateu um recorde histórico.",
    },
    {
      href: "https://veja.abril.com.br/saude/42-da-populacao-da-amazonia-legal-diz-sofrer-impactos-das-mudancas-climaticas/",
      number: "42%",
      text: "Da populações da Amazônia afirmam já ter sido diretamente afetadas pelas mudanças climáticas",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="data__main">
      <Slider {...settings}>
        {statisticsData.map((stat, index) => (
          <div key={index} className="statistics-slide">
            <a href={stat.href} target="_blank" rel="noopener noreferrer">
              <p>{stat.number}</p>
              <p>{stat.text}</p>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}
