import imageSource1 from "../img/ImageSource1.png"

function Banner() {
    return (
        <div className='banner_container'>
            <div className="banner_opacity"></div>
            <div className="banner_container_img">
                <img className="banner_img" src={imageSource1} alt="mer" />
            </div>
            <div className='banner_container_title'>
                <h1 className='banner_title'>Chez vous, partout et ailleurs</h1>
            </div>
      </div>
    )
}
 
export default Banner;