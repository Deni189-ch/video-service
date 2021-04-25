
import {GET_DEFALT_FILMS,  } from "./types";
import { Rectangle, fictionSvg, dramasSvg, comedySvg, horrorsSvg } from '../assets/index';
export interface IFilms {
  id: number
  url: string
}
export interface IGenres {
  id: number
  url: string
  title: string
  svg: string
}

export interface ISearchState {
  defaltFilms: Array<IFilms | null>
  newTVorFilm: Array<IFilms | null>
  genres: Array<IGenres>
}

const initialState: ISearchState = {
  defaltFilms: [],
  newTVorFilm: [],
  genres: [
    {id:1, url: Rectangle, title: 'Комедии', svg: comedySvg,},
    {id:2, url: Rectangle, title: 'Драмы', svg: dramasSvg},
    {id:3, url: Rectangle, title: 'Фантастика', svg: fictionSvg},
    {id:4, url: Rectangle, title: 'Ужасы', svg: horrorsSvg},
    {id:5, url: Rectangle, title: 'Комедии', svg: comedySvg},
    {id:6, url: Rectangle, title: 'Драмы', svg: dramasSvg},
    {id:7, url: Rectangle, title: 'Фантастика', svg: fictionSvg},
    {id:8, url: Rectangle, title: 'Ужасы', svg: horrorsSvg},
  ]
};


export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case GET_DEFALT_FILMS:
      return { ...state, defaltFilms: action.payload };


    
    default:
      return state;
  }
};


