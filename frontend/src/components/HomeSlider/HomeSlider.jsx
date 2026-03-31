import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  const banners = [
   "https://www.jiomart.com/images/cms/aw_rbslider/slides/1772622561_2368x400.jpg?im=Resize=(2368,400)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1774009291_Get_Summer_ready.jpg?im=Resize=(2368,400)",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78268._CB785061629_.jpg",
    "https://images.meesho.com/images/marketing/1767796583251.webp",
   "https://www.jiomart.com/images/cms/aw_rbslider/slides/1773729269_2368x400_2.jpg?im=Resize=(2368,400)"
  ];

  return (
    <>
      <div className="homeSlider py-4">
        <div className="container">
          <Swiper
            spaceBetween={10}
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="sliderHome h-[60vh]"
          >
            {banners.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="item rounded-[25px] overflow-hidden h-full">
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

export default HomeSlider;
