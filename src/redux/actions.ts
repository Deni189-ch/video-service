import {
  GET_DEFALT_FILMS,
  GET_USER_ID,
  IS_AUTH,
  IS_SPIN,
  IS_NEW_NAME,
  IS_REMEMBE_ME,
  IS_DISEIBLE,
  EXIT_USER,
  SET_NEW_USER_ID,
  SET_LOCAL_USER_ID,
} from "./types";
import { AuthAPI, searchAPI } from "../api/api";


export const getDefaltFilms = () => async (dispatch: any) => {
  dispatch(setIsSpinAC(true));
  const response = await searchAPI.getFilms();
  if (response.request.status === 200) {
    dispatch(setIsSpinAC(false));
    const payload = response.data;
    dispatch({ type: GET_DEFALT_FILMS, payload });
  } else {
    debugger;
  }
};

export const setIsSpinAC = (payload: boolean) => ({ type: IS_SPIN, payload });

export const setIsAuthAC = (payload: boolean) => ({ type: IS_AUTH, payload });

export const setIsNewName = (payload: boolean) => ({ type: IS_NEW_NAME, payload });

export const setIsDisaible = (payload: boolean) => ({ type: IS_DISEIBLE, payload });

export const setExitUserAC = (payload: null) => ({ type: EXIT_USER, payload });

export const setNewUserName = (payload: string) => ({ type: SET_NEW_USER_ID, payload });

export const setLocalUserName = (payload: string) => ({ type: SET_LOCAL_USER_ID, payload });


export const postAuthMe = (
  login: string,
  password: string,
  remembeMe: boolean
) => async (dispatch: any) => {
  dispatch(setIsSpinAC(true));
  const response = await AuthAPI.postAuth(login, password);
  if (response.request.status === 200) {
    dispatch(setIsSpinAC(false));
    const value = true;
    remembeMe && dispatch({ type: IS_REMEMBE_ME, value });
    const payload = response.data;
    dispatch({ type: GET_USER_ID, payload });
  } else {
    debugger;
  }
};


export const setNewSearchAC = (id: number, comment: any) => async (
  dispatch: any
) => {
  const response = await searchAPI.postSearch(id, comment);
  if (response.request.status === 200) {
    const payload = response.data;
    dispatch(setIsSpinAC(false));
    //dispatch({ type: POST_COMMENT_ADD, payload })
  } else {
    const payload = response.request.status;
    alert(
      `Код ошибки: ${payload}, если код ошибки 204, значит запрос (заглушка) прошел удачно`
    );
    dispatch(setIsDisaible(false));
    dispatch(setIsSpinAC(false));
    //dispatch({ type: ALERT_RESPONS, payload })
  }
};
