import React from 'react';
import style from './CardComponent.module.css'

const CardComponent = ({info}) => {

    return (
        <div className={style.card}>
            <h2>{info.name}</h2>
            <div>Дата выхода: {info.air_date}</div>
            <div>Номер эпизода: {info.episode.split("E")[1]}</div>
        </div>
    )
}

export default CardComponent