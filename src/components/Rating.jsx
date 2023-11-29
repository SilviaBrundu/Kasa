import { useState } from 'react';

function Rating ({rating}) {

    const [count, setCount] = useState(rating);
    const star = <i className='fa-solid fa-star fa-xl star'></i>;
    const emptyStar = <i className='fa-solid fa-star fa-xl star_empty'></i>;
    const stars = [];

    for (let i = 0; i < count; i++) {
        stars.push(<span key={i}>{star}</span>);
    }

    for (let i = count; i < 5; i++) {
        stars.push(<span key={i}>{emptyStar}</span>);
    }

    return <div className='info_stars_content'>{stars}</div>;
};

    export default Rating;