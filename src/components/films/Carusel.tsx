import React from "react";
import { IFilms } from "../../redux/search-reducer";
import "./style.scss";

// interface defaltFilmsType {
//   id: number;
//   url: string;
// }

interface ICarusel {
  defaltFilms: Array<IFilms>;
}

export const Carusel: React.FC<ICarusel> = ({ defaltFilms }: any) => {
  const [position, setPosition] = React.useState(0);

  let x1 = 0;
  const startTouch = (e: any) => (x1 = e.changedTouches[0].clientX);

  const rightSizeMax = defaltFilms.length * -91.6


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
    <div className="filmLenta-wrapper">
      <div
        className="filmLenta"
        style={{ left: position + "px" }}
        onTouchStart={startTouch}
        onTouchEnd={endTouch}
      >
        {defaltFilms.map(({ id, url }: any) => (
          <div>
            <div key={id} className="filmLenta__item">
              <img className="filmLenta__item-img" src={url} alt="loading..." />
              <div className="film__description">
                The description will not go beyond the picture of the movie.
              </div>
            </div>

            <div className="film__name">
              Name for the film, fit any volume of text.
            </div>
          </div>
        ))}
      </div>
      <div className="filmLenta__arrow-left" onClick={arrowLeftHandler}>
        <div className="filmLenta__arrowButton-left" />
      </div>

      <div className="filmLenta__arrow-right" onClick={arrowRightHandler}>
        <div className="filmLenta__arrowButton-right" />
      </div>
    </div>
  );
};