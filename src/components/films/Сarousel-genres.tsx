import React, { ChangeEventHandler, TouchEventHandler } from "react";
import { IGenres } from "../../redux/search-reducer";
import "./style.scss";

interface ICarusel {
  genres: Array<IGenres>
}

export const CaruselGenres: React.FC<ICarusel> = ({genres}) => {
  const [position, setPosition] = React.useState(0);

  let x1 = 0;
  const startTouch = (e: any) => (x1 = e.changedTouches[0].clientX);

  const rightSizeMax = genres.length * -91.6

  const endTouch = (e: any) => {
    let x2 = e.changedTouches[0].clientX;

    if (x1 > x2 && position <= 0 && position > rightSizeMax) {
      setPosition(position - 275);
    } else if (x1 < x2 && position < 0) setPosition(position + 275);
  };

  const arrowLeftHandler = () => {
    position < 0 && setPosition(position + 275);
  };
  const arrowRightHandler = () => {
    position <= 0 && position > rightSizeMax && setPosition(position - 275);
  };

  return (
    <div className="genres-wrapper">
      <div
        className="genresLenta"
        style={{ left: position + "px" }}
        onTouchStart={startTouch}
        onTouchEnd={endTouch}
      >
        {genres.map(({ id, url, title, svg }) => (
          <div key={id}>
            <div className="genresLenta__item">
              <img className="genresLenta__item-img" src={url} alt="loading..." />
              <div className="genres__description">
                <img src={svg} alt="loading..." className="genres__svg"/>
                {title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="genresLenta__arrow-left" onClick={arrowLeftHandler}>
        <div className="genresLenta__arrowButton-left" />
      </div>

      <div className="genresLenta__arrow-right" onClick={arrowRightHandler}>
        <div className="genresLenta__arrowButton-right" />
      </div>
    </div>
  );
};
