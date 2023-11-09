import imageSource2 from '../img/ImageSource2.png'

function BannerAbout() {
    return (
        <div className='banner_container'>
            <div className='banner_opacity'></div>
            <div className='banner_container_img'>
                <img className='banner_img' src={imageSource2} alt="foret" />
            </div>
        </div>
    )
}
 
export default BannerAbout;