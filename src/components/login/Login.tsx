import React, { ChangeEvent } from "react";
import "./style.scss";

interface ILogin {
  onHandleSubmit: () => void;
  onKyeDownHandler: (keyCode: number) => void;
  onChangeForm: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Login: React.FC<ILogin> = ({
  onKyeDownHandler,
  onHandleSubmit,
  onChangeForm,
}) => {
  const changeForm = (e: ChangeEvent<HTMLInputElement>) => onChangeForm(e);

  const handleSubmit = () => onHandleSubmit();

  const kyeDownHandler = ({ keyCode }: any) => onKyeDownHandler(keyCode);

  return (
    <div className="login">
      <div className="login__modal">
        <div className="login__title">Вход</div>
        <div className="login__input-wrapper">
          <input
            name="login"
            type="text"
            placeholder="Логин"
            className="login__inputLogin input"
            onChange={changeForm}
          />
        </div>
        <div className="login__input-wrapper">
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            className="login__inputLogin input"
            onChange={changeForm}
            onKeyDown={kyeDownHandler}
          />
        </div>
        <div className="login__checkbox-wrapper">
          <input
            name="remembeMe"
            type="checkbox"
            className="login__inputCheckbox"
            onChange={changeForm}
          />
        </div>
        <div className="login__btn btn" onClick={handleSubmit}>
          Войти
        </div>
      </div>
    </div>
  );
};
