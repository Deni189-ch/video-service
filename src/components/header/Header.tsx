import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { setNewSearchAC } from "../../redux/actions";
import "./style.scss";

interface IHeader {
  RedirectFn: (value: string) => void;
}

export const Header: React.FC<IHeader> = ({ RedirectFn }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [TVorFilms, setTVorFilms] = useState<"tv" | "films">("tv");

  const dispatch = useDispatch();
  //@ts-ignore
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const searchChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const searchHandler = () => {
    searchValue && dispatch(setNewSearchAC(searchValue));
  };

  const searchKyeDownHandler = ({ keyCode }: any) => {
    keyCode === 13 && searchHandler();
  };

  const filmsHandler = () => {
    setTVorFilms("films");
  };

  const TVHandler = () => {
    setTVorFilms("tv");
  };

  const enterHandler = () => {
    RedirectFn("/login");
  };

  const exitHandler = () => {
    localStorage.setItem("isAuth", "false");
  };

  return (
    <div className="header">
      <div className="header__play">Видеосервис</div>

      <div className="header__search">
        <input
          className="header__search-input input"
          type="text"
          placeholder="Поиск..."
          value={searchValue}
          onChange={searchChange}
          onClick={searchHandler}
          onKeyDown={searchKyeDownHandler}
        />
        <span className="header__search-button">Найти</span>

        <div className="header__tvORfilms-wrapper">
          <NavLink
            to="/films"
            className={` header__tvORfilms + ' ' + ${
              TVorFilms === "films" && "header__tvORfilms_active"
            }`}
            onClick={filmsHandler}
          >
            Фильмы
          </NavLink>

          <NavLink
            to="/chennels"
            className={` header__tvORfilms + ' ' + ${
              TVorFilms === "tv" && "header__tvORfilms_active"
            }`}
            onClick={TVHandler}
          >
            Телеканалы
          </NavLink>
        </div>
      </div>

      <div className="header__exit-enter">
        {isAuth ? (
          <div className="header__exit" onClick={exitHandler}>
            <span className="header__nik">Константин К. </span> Выйти
          </div>
        ) : (
          <div className="header__enter btn" onClick={enterHandler}>
            Войти
          </div>
        )}
      </div>
    </div>
  );
};
