import React from 'react';
import style from './EpisodeList.module.css'
import CardComponent from '../CardComponent/CardComponent.jsx';

const EpisodeList = () => {
    return (
        <div className={style.main}>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
           <CardComponent/>
        </div>
    )
}

export default EpisodeList;