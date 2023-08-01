import React from 'react';
import style from './HeaderComponent.module.css'
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <Link to={'/'} className={style.header}>
           Rick and Morty
        </Link>
    )
}

export default HeaderComponent