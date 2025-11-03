import { useState } from "react";
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
  const [pagination, setPagination] = useState([
    { id: 1, class: "selected" },
    { id: 2, class: "" },
  ]);
  const pictureGalleryPrimary = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
  ];
  const pictureGallerySecond = [
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
  ];
  const [galleryPagination, setGalleryPagination] = useState<string[]>(
    pictureGalleryPrimary
  );
  const [animationClass, setAnimationClass] = useState<string>("");

  const nextPagination = (index: number) => {
    setAnimationClass("");

    if (index === 1) {
      setPagination([
        { id: 1, class: "selected" },
        { id: 2, class: "" },
      ]);
      setGalleryPagination(pictureGalleryPrimary);
    } else {
      setPagination([
        { id: 1, class: "" },
        { id: 2, class: "selected" },
      ]);
      setGalleryPagination(pictureGallerySecond);
    }

    setTimeout(() => {
      setAnimationClass("slide");
    }, 10);
  };

  return (
    <section className="gallery" id="AÇÕES">
      <div className="gallery__title">
        <Title title="AÇÕES" subtitle="GALERIA DE" orientation="bottom" />
        <div className="gallery__title__controllers">
          <button
            className="gallery__title__controllers--next"
            onClick={() => nextPagination(1)}
          >
            <SlArrowLeft />
          </button>
          {pagination.map((item, index) => {
            return (
              <button
                key={index}
                className={`gallery__title__controllers--pagination ${item.class}`}
                onClick={() => nextPagination(item.id)}
              >
                {item.id}
              </button>
            );
          })}

          <button
            className="gallery__title__controllers--next"
            onClick={() => nextPagination(2)}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>

      <div className={`gallery__picture ${animationClass}`}>
        {galleryPagination?.map((src, i) => (
          <div key={i} className={`item item-${i + 1}`}>
            <img src={src} alt={`Foto ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
