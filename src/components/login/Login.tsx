import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import "./style.scss";

interface ILogin {
  RedirectFn: (value: string) => void
}

export const Login: React.FC<ILogin> = ({ RedirectFn }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    login: "" as any,
    password: "" as any,
    remembeMe: false as boolean,
  });

  const { login, password, remembeMe } = data;

  useEffect(() => {
    const dataObj = { login: "admin", password: "free", remembeMe: "false" };
    localStorage.setItem("dataLocal", JSON.stringify(dataObj));
  }, []);

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, ...{ [e.target.name]: e.target.value.trim() } });
  };
  //@ts-ignore
  const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));

  const handleSubmit = () => {

    if (login === dataLocal.login && password === dataLocal.password) {
      localStorage.setItem("isAuth", "true");
    }
  };

  //@ts-ignore
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  if (isAuth) {
    RedirectFn("/chennels");
  }

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
