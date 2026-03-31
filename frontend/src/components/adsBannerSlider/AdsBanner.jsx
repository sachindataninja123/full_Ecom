import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import BannerBox from "../bannerBox/BannerBox";

const AdsBanner = ({ items }) => {
  return (
    <div className="adsBanner py-5 w-full">
      <Swiper
        slidesPerView={items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1773837705_Oppo_K14x.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1774246827_Dhurandhar_Days.jpeg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1774631289_Match-Mania-HPMC---Old--App.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1773827751_Cooler_Savings_On_ACs.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1773840952_Summer_Electronics-06.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1774631683_milkshakes_.jpg.jpeg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1772790085_stockupHpmc.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1774632249_scoop.jpeg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBanner;
