import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import {
  setNewSearchAC,
  setIsAuthAC,
  setExitUserAC,
  setNewUserName,
  setIsNewName,
  setLocalUserName,
} from "../../redux/actions";
import { Login } from "../login/Login";
import "./style.scss";

// interface IHeader {
//   RedirectFn: (value: string) => void;
// }

export const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [TVorFilms, setTVorFilms] = useState<"tv" | "films">("tv");

  const [newName, setNewName] = useState<string>("");

  const isAuth = useSelector(({ search }: any) => search.isAuth);
  const userID = useSelector(({ search }: any) => search.userID);
  const isNewName = useSelector(({ search }: any) => search.isNewName);

  useEffect(() => {
    userID && userID.token && setNewName(userID.token);
    userID && userID.token && localStorage.setItem("DatesLocal", JSON.stringify(userID));
  }, [userID]);

  useEffect(() => {
    const AuthMe = localStorage.getItem("DatesLocal");
    const dates = AuthMe && JSON.parse(AuthMe);
    console.log('DatesLocal', dates);
    
    dates && dispatch(setLocalUserName(dates));
  }, []);

  console.log(userID);

  const inputEl = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const searchChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const searchHandler = () => {
    searchValue && dispatch(setNewSearchAC(239, {name: 'defalts', comment: searchValue,}));
    setSearchValue('')
  };

  const searchKyeDownHandler = ({ keyCode }: any) => {
    keyCode === 13 && searchHandler();
  };

  const filmsHandler = () => setTVorFilms("films");
  const TVHandler = () => setTVorFilms("tv");

  const enterHandler = () => {
    dispatch(setIsAuthAC(true));
  };

  const exitHandler = () => {
    dispatch(setExitUserAC(null));
    localStorage.setItem("DatesLocal", JSON.stringify(null));
  };

  const renameHandler = () => {
    dispatch(setIsNewName(true));
  };

  const newNameChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setNewName(value);
  };

  const getRenameHandler = ({ keyCode }: any) => {
    keyCode === 13 && setNewRename();
  };

  const setNewRename = () => {
    dispatch(setNewUserName(newName));
  };

  return (
    <div className="header">
      {isAuth && <Login />}
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
        {!!userID ? (
          <div className="header__exit-info">
            {!isNewName ? (
              <div className="header__nik" onClick={renameHandler}>
                User: {userID.token}{" "}
              </div>
            ) : (
              <input
                type="text"
                value={newName}
                autoFocus
                onBlur={setNewRename}
                onKeyDown={getRenameHandler}
                onChange={newNameChange}
                className="header__newNameInput input"
              />
            )}
            <div className="header__exit" onClick={exitHandler}>
              Выйти
            </div>
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
export default Header
// export default compose(withAuthRedirect)(Header);