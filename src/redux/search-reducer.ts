import {
  GET_DEFALT_FILMS,
  IS_AUTH,
  GET_USER_ID,
  EXIT_USER,
  SET_NEW_USER_ID,
  IS_NEW_NAME,
  SET_LOCAL_USER_ID,
} from "./types";
import {
  Rectangle,
  fictionSvg,
  dramasSvg,
  comedySvg,
  horrorsSvg,
} from "../assets/index";
export interface IFilms {
  id: number;
  url: string;
}
export interface IGenres {
  id: number;
  url: string;
  title: string;
  svg: string;
}
export interface ISearchState {
  isAuth: boolean;
  isNewName: boolean;
  userID: any; ///{id: number, token: string} | null
  defaltFilms: Array<IFilms | null>;
  newTVorFilm: Array<IFilms | null>;
  genres: Array<IGenres>;
}

const initialState: ISearchState = {
  isAuth: false,
  isNewName: false,
  userID: null,
  defaltFilms: [],
  newTVorFilm: [],
  genres: [
    { id: 1, url: Rectangle, title: "Комедии", svg: comedySvg },
    { id: 2, url: Rectangle, title: "Драмы", svg: dramasSvg },
    { id: 3, url: Rectangle, title: "Фантастика", svg: fictionSvg },
    { id: 4, url: Rectangle, title: "Ужасы", svg: horrorsSvg },
    { id: 5, url: Rectangle, title: "Комедии", svg: comedySvg },
    { id: 6, url: Rectangle, title: "Драмы", svg: dramasSvg },
    { id: 7, url: Rectangle, title: "Фантастика", svg: fictionSvg },
    { id: 8, url: Rectangle, title: "Ужасы", svg: horrorsSvg },
  ],
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DEFALT_FILMS:
      return { ...state, defaltFilms: action.payload };

    case IS_AUTH:
      return { ...state, isAuth: action.payload };

    case IS_NEW_NAME:
      return { ...state, isNewName: action.payload };

    case GET_USER_ID:
      return {
        ...state,
        userID: action.payload,
        isAuth: false,
      };

    case EXIT_USER:
      return { ...state, userID: action.payload };

      case SET_NEW_USER_ID:
        return {
          ...state,
          userID: {
            id: state.userID.id,
            token: action.payload,
          },
          isNewName: false
        };

      case SET_LOCAL_USER_ID:
        return { ...state, userID: action.payload};
      
    default:
      return state;
  }
};
