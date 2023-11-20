function Banner({title = '', image, alt}) {
    return (
        <div className='banner_container'>
            <div className="banner_opacity"></div>
            <div className="banner_container_img">
                <img className="banner_img" src={image} alt={alt} />
            </div>
            <div className='banner_container_title'>
                <h1 className='banner_title'>{title}</h1>
            </div>
      </div>
    )
}
 
export default Banner;