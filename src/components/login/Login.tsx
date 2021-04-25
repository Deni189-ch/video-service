import React, {
  ChangeEvent,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { postAuthMe } from "../../redux/actions";
import "./style.scss";

export const Login: React.FC<any> = ( ) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    login: "" as any,
    password: "" as any,
    remembeMe: false as boolean,
  });

  const { login, password, remembeMe } = data;

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, ...{ [e.target.name]: e.target.value.trim() } });
  };

  const handleSubmit = () => {
    if ( login && password )  dispatch(postAuthMe(login, password))
  };

  const onKyeDownHandler = ({ keyCode }: any) => {
    keyCode === 13 && handleSubmit();
  };

 

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
            onKeyDown={onKyeDownHandler}
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
        <div className="login__btn btn" onClick={handleSubmit} >
          Войти
        </div>
      </div>
    </div>
  );
};
