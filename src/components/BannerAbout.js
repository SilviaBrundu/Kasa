import imageSource2 from '../img/ImageSource2.png'

function BannerAbout() {
    return (
        <div className='bannerContainer'>
            <div className='bannerOpacity'></div>
            <div className='bannerImgContainer'>
                <img className='bannerImg' src={imageSource2} alt="foret" />
            </div>
        </div>
    )
}
 
export default BannerAbout;