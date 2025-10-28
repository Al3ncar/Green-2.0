import React from "react";

import Title from "../../../components/title/title";
import categoryCard from "../../../utils/data/category.data";

export default function Category() {
  return (
    <section className="category">
      {categoryCard.map((item) => {
        return (
          <>
            {item.key === 1 ? (
              <div className="category__content">
                <Title
                  title="ATIVIDADES"
                  subtitle=" CATEGORIAS E"
                  orientation="bottom"
                  align="right"
                />
                <div className="category__card-row">
                  {item.cards.map((card, index) => (
                    <aside
                      key={card.id || index}
                      className={`category-card category-card--${
                        card.id || index + 1
                      }`}
                    >
                      <div className="picture__card">
                        <picture>
                          <img src={card.picture} alt={card.altPicture} />
                        </picture>
                      </div>
                      <div className="context__card">
                        <p className="context__card--title">{card.title}</p>
                        <p className="context__card--description">
                          {card.description}
                        </p>
                      </div>
                    </aside>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {item.cards.map((card, index) => (
                  <aside
                    key={card.id || index}
                    className={`category-card category-card--${
                      card.id || index + 1
                    }`}
                  >
                    <div className="picture__card">
                      <picture>
                        <img src={card.picture} alt={card.altPicture} />
                      </picture>
                    </div>
                    <div className="context__card">
                      <p className="context__card--title">{card.title}</p>
                      <p className="context__card--description">
                        {card.description}
                      </p>
                    </div>
                  </aside>
                ))}
              </>
            )}
          </>
        );
      })}
    </section>
  );
}
