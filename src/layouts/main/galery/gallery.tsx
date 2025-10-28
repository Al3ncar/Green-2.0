import React from "react";
import Title from "../../../components/title/title";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Gallery1 from "../../../assets/pictures/galery/galery_(1).jpg";
import Gallery2 from "../../../assets/pictures/galery/galery_(2).jpg";
import Gallery3 from "../../../assets/pictures/galery/galery_(3).jpg";
import Gallery4 from "../../../assets/pictures/galery/galery_(4).jpg";
import Gallery5 from "../../../assets/pictures/galery/galery_(5).jpg";

import Gallery6 from "../../../assets/pictures/galery/galery_(6).jpg";
import Gallery7 from "../../../assets/pictures/galery/galery_(7).jpg";
import Gallery8 from "../../../assets/pictures/galery/galery_(8).jpg";
import Gallery9 from "../../../assets/pictures/galery/galery_(9).jpg";
import Gallery10 from "../../../assets/pictures/galery/galery_(10).jpg";

export default function Gallery() {
  const dataimg = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];
  return (
    <section className="gallery">
      <div className="gallery__title">
        <Title title="AÇÕES" subtitle="GALERIA DE" orientation="bottom" />
        <div className="gallery__title__controllers">
          <button className="gallery__title__controllers--next">
            <SlArrowLeft />
          </button>
          <button className="gallery__title__controllers--pagination selected">
            1
          </button>
          <button className="gallery__title__controllers--pagination">2</button>
          <button className="gallery__title__controllers--next">
            <SlArrowRight />
          </button>
        </div>
      </div>

      <div className="gallery__picture">
        {dataimg.map((src, i) => (
          <div key={i} className={`item item-${i + 1}`}>
            <img src={src} alt={`Foto ${i + 1}`} />
            <p style={{ fontSize: "45px" }}>{i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
