import { useState } from "react";
import Title from "../../../components/title/title";
import commentsCard from "../../../utils/data/comments.data";

export default function Comments() {
  const [quantityCard, setQuantityCard] = useState<number>(3);
  const classSplit = (cardNumber: number) => {
    const quantityCard = cardNumber + 1;
    return quantityCard > 3 ? "right" : "left";
  };
  return (
    <section className="comments" id="VOLUNTÁRIOS">
      <Title
        title="VOLUNTÁRIOS"
        subtitle="NOSSOS"
        align="center"
        orientation="bottom"
      />
      <section className="comments__cards">
        {commentsCard.map((card, index) => {
          return (
            <div
              key={card.id}
              className={`comments__cards card__${classSplit(index)}`}
            >
              <figure>
                <picture>
                  <img
                    src={card.picture}
                    alt={`Foto de Perfil do(a) ${card.name}`}
                  />
                </picture>
                <figcaption>
                  <p className={`card--title`}>{card.name}</p>
                  <p className="card--subtitle">{card.localization}</p>
                </figcaption>
              </figure>

              <p className="card__parg">{card.comments}</p>

              <div className="card__avaliation">
                <p>Avaliação: </p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
