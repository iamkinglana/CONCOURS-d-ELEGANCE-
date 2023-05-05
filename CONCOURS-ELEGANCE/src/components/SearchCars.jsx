import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    "https://thesecondangle.com/wp-content/uploads/schema-and-structured-data-for-wp/hyperion-xp-1_100755933-e1601984415240-1024x746-1-1200x900.webp",
    "https://i.ytimg.com/vi/GbbPwEET7KU/maxresdefault.jpg",
    "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eebcd3b9afca580e2a96a0ab9532bac7.jpg",
    "https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg",
    "https://i.pinimg.com/originals/4e/37/38/4e37389f082195b15b129c43113e34b0.jpg",
    "https://wallup.net/wp-content/uploads/2018/03/19/587030-Toyota_FT-1_Concept-car-vehicle-silver_cars.jpg",
    "https://w0.peakpx.com/wallpaper/736/285/HD-wallpaper-toyota-ft-1-concept-toyota-car-vehicle-concept-black-cars.jpg",
    "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/528426/pexels-photo-528426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://media.ed.edmunds-media.com/dodge/challenger/2021/oem/2021_dodge_challenger_coupe_srt-hellcat-redeye-widebody_fq_oem_1_815.jpg"
    

  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default ImageSlider;