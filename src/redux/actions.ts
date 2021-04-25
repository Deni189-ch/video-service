import { GET_DEFALT_FILMS, } from './types';

import { searchAPI } from "../api/api";
//import { IS_ERROR_TOGGLE, IS_SPIN_TOGGLE } from "./data/types";

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

export const setNewSearchAC = (newSearch: string) => async (dispatch: any) => {
  const response = await searchAPI.postSearch(newSearch);
  debugger;
  if (response.request.status === 200) {
    debugger;
    const payload = response.data;
    //dispatch({ type: POST_COMMENT_ADD, payload })
  } else {
    debugger;
    const payload = response.request.status;
    //dispatch({ type: ALERT_RESPONS, payload })
  }
};
//export const setToggleErrorAC = value => ({ type: IS_ERROR_TOGGLE, value });
