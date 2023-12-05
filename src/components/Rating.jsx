function Rating ({rating}) {

    const star = <i className='fa-solid fa-star fa-xl star'></i>;
    const emptyStar = <i className='fa-solid fa-star fa-xl star_empty'></i>;
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i}>{star}</span>);
    }

    for (let i = rating; i < 5; i++) {
        stars.push(<span key={i}>{emptyStar}</span>);
    }

    return <div className='info_stars_content'>{stars}</div>;
};

    export default Rating;