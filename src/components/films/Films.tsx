import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDefaltFilms } from '../../redux/actions';
import { Carusel } from './Carusel';
import { CaruselGenres } from './Сarousel-genres';
import './style.scss';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Films: React.FC = () => {

  const dispatch = useDispatch();
  
 const defaltFilms = useSelector(({search}: any) => search.defaltFilms);
 const genres = useSelector(({search}: any) => search.genres);
  
  useEffect(()=> {

   dispatch(getDefaltFilms())
  }, [])

  console.log('фильмы', defaltFilms);
  

  return (
    <div className="film">
      <div className="film__title">Новинки</div>
      <Carusel defaltFilms={defaltFilms} />

      <div className="film__title">Жанры</div>
      <CaruselGenres genres={genres} />
    </div>
  )
}

export default Films;
//export default compose(withAuthRedirect)(Films);