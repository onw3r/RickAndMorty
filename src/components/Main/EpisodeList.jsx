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


    const episodesOfSeasons = episodes.data.reduce((acc, episode) => {
        const seasonNumber = episode.episode.split('E')[0];
        if (acc.hasOwnProperty(seasonNumber)) {
            acc[seasonNumber].push(episode);
        } else {
            acc[seasonNumber] = [episode];
        }
        return acc;
    }, {});

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        dispatch(searchEpisodes(searchTerm));
    };
    return (
        <div className={style.main}>
            <input
                type='text'
                className={style.search}
                placeholder={'Поиск'}
                onChange={handleSearch}
            />
            {
                Object.keys(episodesOfSeasons).map((seasonNumber, index) => (
                    <div key={index}>
                        <h2 className={style.season}>Сезон {seasonNumber.slice(1)}</h2>
                        <div className={style.series_wrapper}>
                            {episodesOfSeasons[seasonNumber].map((episode, index) => (
                                <CardComponent
                                    info={episode}
                                    key={index}
                                />
                            ))}
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default EpisodeList;