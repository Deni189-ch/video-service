
import {GET_DEFALT_FILMS,  } from "./types";
import { tv1ChanelSvg, tv2x2Svg, tvRBKSvg, tvASvg, } from '../assets/index';

export interface IPrograms {
  id: number
  time: string
  descriptions: string
}

export interface IDefaltTV {
  id: number
  url: string
  title: string
  programs: Array<IPrograms>
}

export interface IChanelsState {
  defaltTV: Array<IDefaltTV>
}

const initialState: IChanelsState = {
  defaltTV: [
    {id:1, url: tv1ChanelSvg, title: 'Первый канал',
      programs: [
       {id: 11, time: '13:00', descriptions: 'Новости (с субтитрами)'},
       {id: 12, time: '14:00', descriptions: 'Давай поженимся'},
       {id: 13, time: '15:00', descriptions: 'Другие новости'},
    ]},
    {id:2, url: tv2x2Svg, title: '2х2',
    programs: [
      {id: 21, time: '13:00', descriptions: 'МУЛЬТ ТВ. Сезон 4, 7 серия'},
      {id: 22, time: '14:00', descriptions: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'},
      {id: 23, time: '15:00', descriptions: 'БУРДАШЕВ. Сезон 1, 20 серия'},
   ]},
    {id:3, url: tvRBKSvg, title: 'РБК',
     programs: [
      {id: 31, time: '13:00', descriptions: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'},
      {id: 32, time: '14:00', descriptions: 'ДЕНЬ. Главные темы'},
      {id: 33, time: '15:00', descriptions: 'Главные новости'},
   ]},
    {id:4, url: tvASvg, title: 'AMEDIA PREMIUM',
     programs: [
      {id: 31, time: '13:00', descriptions: 'Клиент всегда мёртв'},
      {id: 32, time: '14:00', descriptions: 'Голодные игры: Сойка-пересмешница. Часть I'},
      {id: 33, time: '15:00', descriptions: 'Секс в большом городе'},
   ]},
  ]
};


export const TVChannelsReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case GET_DEFALT_FILMS:
      return { ...state, defaltFilms: action.payload };


    
    default:
      return state;
  }
};


