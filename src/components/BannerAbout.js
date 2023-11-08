import imageSource2 from '../img/ImageSource2.png'

function BannerAbout() {
    return (
        <div className='bannerContainer'>
            <div className='bannerOpacity'>
                <div className='bannerImgContainer'>
                    <img className='bannerImg' src={imageSource2} alt="foret" />
                </div>
            </div>
        </div>
    )
}
 
export default BannerAbout;