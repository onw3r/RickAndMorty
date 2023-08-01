import React, { useState, useEffect } from 'react';
import style from './DetailedDescription.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const DetailedDescription = () => {
    const { id } = useParams();
    const series = useSelector(state => state.episodes.originalData);
    const filter = series.filter(item => item.id == id)[0];
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        const fetchCharacters = async () => {
            const characterData = await Promise.all(filter.characters.map(url => axios.get(url)));
            const characters = characterData.map(response => response.data);
            setCharacters(characters);
        };

        fetchCharacters();
    }, [id, series]);

    return (
        <div className={style.card}>
            <div className={style.link_wrapper}>
                <Link to={'/'}>Назад</Link>
            </div>
            <div>Сезон: {filter.episode.split("E")[0].slice(1)}</div>
            <div>Серия: {filter.episode.split("E")[1]}</div>
            <div>Дата выхода: {filter.air_date}</div>
            <div>Название: {filter.name}</div>
            <div>
                {
                    characters.map((character,index)=>(
                        <div className={style.character_wrapper} key={index}>
                            <div>
                                <img src={character.image} alt='img'/>
                            </div>
                            <div>
                                <div>Имя: {character.name}</div>
                                <div>Пол: {character.gender}</div>
                                <div>Вид: {character.species}</div>
                                <div>Статус: {character.status}</div>
                                <div>Расположение: {character.location.name}</div>
                                <div>Происхождение: {character.origin.name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DetailedDescription;