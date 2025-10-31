import React, { useState } from "react";
import Title from "../../../components/title/title";
import categoryCard from "../../../utils/data/category.data";
import { FaInfoCircle } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";

export default function Category() {
  const [cardSeeNumber, setCardSeeNumber] = useState<number>(5);
  const [isAnimating, setIsAnimating] = useState(false);

  const clickInCard = (card: any) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCardSeeNumber(card);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const hasExpanded = (index: number) =>
    cardSeeNumber === index + 1 ? "__expand" : "";

  return (
    <section className="category" id="ATIVIDADES">
      <div className="category__content">
        <Title
          title="ATIVIDADES"
          subtitle=" CATEGORIAS E"
          orientation="bottom"
          align="right"
        />
        <div className="category__content__nav">
          <p>
            <PiPlantFill />
          </p>

          <ul className="category__content__nav--list">
            {categoryCard.map((card, index) => {
              return (
                <li
                  className={`${hasExpanded(index)}`}
                  key={index}
                  onClick={() => clickInCard(card.id)}
                >
                  {card.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="category__card-row">
          {categoryCard.map((card, index) => {
            return (
              <aside
                key={card.id || index}
                className={`category-card category-card--${
                  card.id
                }${hasExpanded(index)} ${isAnimating ? "animating" : ""}`}
                onClick={() => clickInCard(card.id)}
              >
                <div className="picture__card">
                  <picture>
                    <img src={card.picture} alt={card.altPicture} />
                  </picture>
                </div>

                {hasExpanded(index) === "__expand" && (
                  <div className="context__card">
                    <p className="context__card--title">{card.title}</p>
                    <p className="context__card--description">
                      {card.description}
                    </p>
                  </div>
                )}
              </aside>
            );
          })}
        </div>
      </div>
    </section>
  );
}
