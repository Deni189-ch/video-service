import React, { useEffect } from "react";
import { CaruselGenres } from "./Сarousel-genres";
import { Carusel } from "./Carusel";
import "./style.scss";

interface IFilms {
  genres: any;
  defaltFilms: any;
  dispatch: any;
  getDefaltFilms: () => void;
}
const Films: React.FC<IFilms> = ({
  defaltFilms,
  genres,
  dispatch,
  getDefaltFilms,
}) => {
  useEffect(() => {
    dispatch(getDefaltFilms());
  }, []);

  return (
    <div className="film">
      <div className="film__title">Новинки</div>

      <Carusel defaltFilms={defaltFilms} />

      <div className="film__title">Жанры</div>

      <CaruselGenres genres={genres} />
    </div>
  );
};

export default Films;
