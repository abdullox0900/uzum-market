import "./slider.scss";
import BannerImg from '../../assets/images/swiper.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";


function Slider() {
  return (
    <div className="container">
      <Swiper
        dir="rtl"
        navigation={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-card">
            <img src={BannerImg} alt="banner"  height={413} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img src={BannerImg} alt="banner"  height={413} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img src={BannerImg} alt="banner"  height={413} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img src={BannerImg} alt="banner"  height={413} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img src={BannerImg} alt="banner"  height={413} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img src={BannerImg} alt="banner" height={413} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider