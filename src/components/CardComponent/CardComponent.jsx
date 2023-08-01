import React from 'react';
import style from './CardComponent.module.css'
import { Link } from 'react-router-dom';

const CardComponent = ({info}) => {
    return (
        <div className={style.card}>
            <div>
                <Link to={'/list/' + info.id}>{info.name}</Link>
            </div>
            <div>
                <Link to={'/list/' + info.id}>Дата выхода: {info.air_date}</Link>
            </div>
            <div>
                <Link to={'/list/' + info.id}>Номер эпизода: {info.episode.split("E")[1]}</Link>
            </div>
        </div>
    )
}

export default CardComponent