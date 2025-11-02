import { useEffect, useState } from "react";
import Title from "../../../components/title/title";
import commentsCard from "../../../utils/data/comments.data";

export default function Comments() {
  const [quantityCard, setQuantityCard] = useState(commentsCard.length);

  const expandCardSee = () => {
    setQuantityCard(commentsCard.length)
  }

  const limitedCard = () => {
    const screenWidth = window.screen.width;
screenWidth <= 550 &&  setQuantityCard(2)
  }
  const orientationCard = (card: any) => {
    const screenWidth = window.screen.width;

    if (screenWidth < 1024 && screenWidth > 550) return validScreen1024(card);
    else return card.id > 3 ? "card__left" : "card__right";
  };

  const validScreen1024 = (card: any) => {
    return card.id <= 2
      ? "card__right"
      : card.id > 2 && card.id <= 4
      ? "card__left"
      : "card__right";
  };

  useEffect(() => {
    limitedCard()
  }, [])

  return (
    <section className="comments" id="VOLUNTÁRIOS">
      <Title
        title="VOLUNTÁRIOS"
        subtitle="NOSSOS"
        align="center"
        orientation="bottom"
      />

      <section className="comments__cards">
        {commentsCard.slice(0, quantityCard).map((card) => (
          <div
            key={card.id}
            className={`comments__cards ${orientationCard(card)}`}
          >
            <figure>
              <picture>
                <img
                  src={card.picture}
                  alt={`Foto de Perfil do(a) ${card.name}`}
                />
              </picture>
              <figcaption>
                <p className="card--title">{card.name}</p>
                <p className="card--subtitle">{card.localization}</p>
              </figcaption>
            </figure>

            <p className="card__parg">{card.comments}</p>

            <div className="card__avaliation">
              <p>Avaliação: </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        ))}

        <div className="comments__cards btn__expand">
          <button onClick={() => expandCardSee()}>Mostrar Mais</button>
        </div>
      </section>
    </section>
  );
}
