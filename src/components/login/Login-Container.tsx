import React, { ChangeEvent, useState } from "react";
import { postAuthMe } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Login } from "./Login";
import "./style.scss";

export const LoginContainer: React.FC = () => {
  const [data, setData] = useState({
    login: "" as string,
    password: "" as string,
    remembeMe: false as boolean,
  });
  const { login, password, remembeMe } = data;

  const dispatch = useDispatch();

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, ...{ [e.target.name]: e.target.value.trim() } });
  };

  const onHandleSubmit = () => {
    if (login && password) dispatch(postAuthMe(login, password, remembeMe));
  };

  const onKyeDownHandler = (keyCode: number) => {
    keyCode === 13 && onHandleSubmit();
  };

  return (
    <Login
      onKyeDownHandler={onKyeDownHandler}
      onHandleSubmit={onHandleSubmit}
      onChangeForm={onChangeForm}
    />
  );
};
