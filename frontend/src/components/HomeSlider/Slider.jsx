import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  const banners = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/74._CB783716748_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78268._CB785061629_.jpg",
    "https://images.meesho.com/images/marketing/1767796583251.webp",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/GW/BAU/Dec/Hero/Mega_home_sale_BAU_PC_-_Drying_racks._CB777818991_.jpg",
  ];

  return (

    <>
      <style>{`
        .sliderHome .swiper-button-next::after,
        .sliderHome .swiper-button-prev::after {
          font-size: 12px !important;
          font-weight: 900 !important;
        }
        .sliderHome .swiper-button-next,
        .sliderHome .swiper-button-prev {
          width: 35px !important;
          height: 35px !important;
          background: #fff !important;
          border-radius: 50% !important;
          color: #ff5252 !important;
        }
      `}</style>
          <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={15}
          modules={[Navigation, Autoplay]}
          navigation={true}     
          autoplay={{ delay: 3000 }}
          loop={true}
          className="sliderHome h-[60vh]"
        >
          {banners.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="item rounded-[20px] overflow-hidden h-full">
                <img
                  src={img}
                  alt="slider Banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>

  );
};

export default Slider;