import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewSearchAC,
  setIsAuthAC,
  setExitUserAC,
  setNewUserName,
  setIsNewName,
  setLocalUserName,
  setIsSpinAC,
  setIsDisaible,
} from "../../redux/actions";

import { Header } from "./Header";
import "./style.scss";

export const HeaderContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [TVorFilms, setTVorFilms] = useState<"tv" | "films">("tv");
  const [newName, setNewName] = useState<string>("");

  const isAuth = useSelector(({ search }: any) => search.isAuth);
  const isSpin = useSelector(({ search }: any) => search.isSpin);
  const isNewName = useSelector(({ search }: any) => search.isNewName);
  const isRemembeMe = useSelector(({ search }: any) => search.isRemembeMe);
  const isDiseible = useSelector(({ search }: any) => search.isDiseible);
  const userID = useSelector(({ search }: any) => search.userID);

  const dispatch = useDispatch();

  useEffect(() => {
    userID && userID.token && setNewName(userID.token);
    isRemembeMe &&
      userID &&
      userID.token &&
      localStorage.setItem("DatesLocal", JSON.stringify(userID));
  }, [userID]);

  useEffect(() => {
    const AuthMe = localStorage.getItem("DatesLocal");
    const dates = AuthMe && JSON.parse(AuthMe);

    dates && dispatch(setLocalUserName(dates));
  }, []);

  const onSearchChange = (value: string) => setSearchValue(value);

  const onSearchHandler = () => {
    if (searchValue) {
      dispatch(setNewSearchAC(239, { name: "defalts", comment: searchValue })); //# запрос заглушка
      setSearchValue("");
      dispatch(setIsSpinAC(true));
      dispatch(setIsDisaible(true));
    }
  };
  const onsearchKyeDownHandler = (keyCode: number) => {
    keyCode === 13 && onSearchHandler();
  };

  const onFilmsHandler = () => setTVorFilms("films");
  const onTVHandler = () => setTVorFilms("tv");

  const onEnterHandler = () => dispatch(setIsAuthAC(true));
  const onExitHandler = () => {
    dispatch(setExitUserAC(null));
    localStorage.setItem("DatesLocal", JSON.stringify(null));
  };

  const onRenameHandler = () => dispatch(setIsNewName(true));
  const onNewNameChange = (value: string) => setNewName(value);

  const onGetRenameHandler = (keyCode: number) => {
    keyCode === 13 && onSetNewRename();
  };
  const onSetNewRename = () => dispatch(setNewUserName(newName));

  return (
    <Header
      isAuth={isAuth}
      isSpin={isSpin}
      isNewName={isNewName}
      isDiseible={isDiseible}
      userID={userID}
      onSearchChange={onSearchChange}
      onSearchHandler={onSearchHandler}
      onsearchKyeDownHandler={onsearchKyeDownHandler}
      searchValue={searchValue}
      onFilmsHandler={onFilmsHandler}
      onTVHandler={onTVHandler}
      TVorFilms={TVorFilms}
      onNewNameChange={onNewNameChange}
      onSetNewRename={onSetNewRename}
      newName={newName}
      onGetRenameHandler={onGetRenameHandler}
      onRenameHandler={onRenameHandler}
      onExitHandler={onExitHandler}
      onEnterHandler={onEnterHandler}
    />
  );
};

export default HeaderContainer;
