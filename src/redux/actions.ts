import { GET_DEFALT_FILMS, IS_AUTH, GET_USER_ID, EXIT_USER, SET_NEW_USER_ID, IS_NEW_NAME, SET_LOCAL_USER_ID } from "./types";
import { AuthAPI, searchAPI } from "../api/api";

export const getDefaltFilms = () => async (dispatch: any) => {
  const response = await searchAPI.getFilms();
  if (response.request.status === 200) {
    // добавить загрузчик
    const payload = response.data;
    dispatch({ type: GET_DEFALT_FILMS, payload });
  } else {
    debugger;
  }
};

export const setIsAuthAC = (payload: boolean) => ({ type: IS_AUTH, payload });

export const setExitUserAC = (payload: null) => ({ type: EXIT_USER, payload });

export const setNewUserName = (payload: any) => ({ type: SET_NEW_USER_ID, payload });

export const setLocalUserName = (payload: any) => ({ type: SET_LOCAL_USER_ID, payload });

export const setIsNewName = (payload: boolean) => ({ type: IS_NEW_NAME, payload });


export const postAuthMe = ( login: string, password: string ) => async (dispatch: any) => {
  const response = await AuthAPI.postAuth(login, password);
  if (response.request.status === 200) {
    // добавить загрузчик
    const payload = response.data
    dispatch({ type: GET_USER_ID, payload });
  } else {
    debugger;
  }
};


export const setNewSearchAC = (id: number, comment: any) => async (dispatch: any) => {
  
  const response = await searchAPI.postSearch(id, comment)
  if (response.request.status === 200) {
    const payload = response.data;
    //dispatch({ type: POST_COMMENT_ADD, payload })
  } else {
    const payload = response.request.status;
    alert(`Код ошибки: ${payload}, если код ошибки 204, значит запрос (заглушка) прошел удачно`)
    //dispatch({ type: ALERT_RESPONS, payload })
  }
};
