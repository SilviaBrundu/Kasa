import imageSource1 from "../img/ImageSource1.png"

function Banner() {
    return (
        <div className='bannerContainer'>
            <div className="bannerOpacity">
            <div className="bannerImgContainer">
                <img className="bannerImg" src={imageSource1} alt="mer" />
            </div>
            <div className='bannerTitleContainer'>
                <h1 className='bannerTitle'>Chez vous, partout et ailleurs</h1>
            </div>
            </div>
      </div>
    )
}
 
export default Banner;