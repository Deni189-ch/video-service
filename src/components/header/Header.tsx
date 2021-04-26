import React, { ChangeEvent, ChangeEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { LoginContainer } from "../login/Login-Container";

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import "./style.scss";

const antIcon = <LoadingOutlined style={{ fontSize: 46 }} spin />;
interface IHeader {
  isAuth: boolean;
  isNewName: boolean;
  isSpin: boolean;
  isDiseible: boolean
  userID: any;
  searchValue: string;
  TVorFilms: string;
  newName: string;
  onSearchChange: (value: string) => void;
  onSearchHandler: () => void;
  onsearchKyeDownHandler: (keyCode: number) => void;
  onFilmsHandler: () => void;
  onTVHandler: () => void;
  onNewNameChange: (value: string) => void;
  onSetNewRename: () => void;
  onGetRenameHandler: (keyCode: number) => void;
  onRenameHandler: () => void;
  onExitHandler: () => void;
  onEnterHandler: () => void;
}

export const Header: React.FC<IHeader> = ({
  isAuth,
  isSpin,
  isNewName,
  isDiseible,
  userID,
  newName,
  TVorFilms,
  searchValue,
  onSearchChange,
  onSearchHandler,
  onsearchKyeDownHandler,
  onFilmsHandler,
  onTVHandler,
  onNewNameChange,
  onSetNewRename,
  onGetRenameHandler,
  onRenameHandler,
  onExitHandler,
  onEnterHandler,
}) => {
  
  const searchChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if(value) onSearchChange(value);
  };

  const searchHandler = () => {
    !isDiseible && onSearchHandler();
  } 
  const searchKyeDownHandler = ({ keyCode }: any) => {
    onsearchKyeDownHandler(keyCode);
  };

  const filmsHandler = () => onFilmsHandler();
  const TVHandler = () => onTVHandler();

  const enterHandler = () => onEnterHandler();
  const exitHandler = () => onExitHandler();

  const renameHandler = () => onRenameHandler();
  const newNameChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    onNewNameChange(value);
  };

  const getRenameHandler = ({ keyCode }: any) => onGetRenameHandler(keyCode);
  const setNewRename = () => onSetNewRename();

  return (
    <div className="header">
     {isSpin && <Spin indicator={antIcon} />}
      {isAuth && <LoginContainer />}
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
          disabled={isDiseible}
        />
        <span className="header__search-button" onClick={searchHandler} >Найти</span>

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

export default Header;
