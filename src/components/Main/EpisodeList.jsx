import React, { useEffect } from 'react';
import style from './EpisodeList.module.css'
import CardComponent from '../CardComponent/CardComponent.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEpisodes, searchEpisodes } from '../../store/Actions/Actions.jsx';

const EpisodeList = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episodes);

  useEffect(() => {
    dispatch(fetchEpisodes()); // Загрузка списка эпизодов при монтировании компонента
  }, [dispatch]);


  console.log(episodes.data)

    return (
        <div className={style.main}>
            {
                episodes.data.map((item,index)=>(

                    <CardComponent
                        info={item}
                        key={index}
                    />
                ))
            }

        </div>
    )
}

export default EpisodeList;