import React from 'react';
import style from './DetailedDescription.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailedDescription = () => {
    const { id } = useParams();
    const episode = useSelector(state => state.episodes.data.id);
    console.log(episode)
    return (
        <div>

        </div>
    );
};

export default DetailedDescription;