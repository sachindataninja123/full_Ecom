import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import BannerBox from "../bannerBox/BannerBox";
import BannerBoxV2 from "../BannerBoxV2/BannerBoxV2";

const AdsBannerV2 = ({ items }) => {
  return (
    <div className="adsBanner py-5 w-full">
      <Swiper
        slidesPerView={items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: true }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerBoxV2
           image={'https://www.threesixtycameras.com/wp-content/uploads/2016/02/go-hands-on-with-the-gear360-and-see-how-it-change-how-we-capture-our-memories25080954971ojpg-c749fe_765w.jpg'} info="left"
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
            image={'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D'} info="right" 
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
           image={'https://www.threesixtycameras.com/wp-content/uploads/2016/02/go-hands-on-with-the-gear360-and-see-how-it-change-how-we-capture-our-memories25080954971ojpg-c749fe_765w.jpg'} info="left"
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
            image={'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D'} info="right" 
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
           image={'https://www.threesixtycameras.com/wp-content/uploads/2016/02/go-hands-on-with-the-gear360-and-see-how-it-change-how-we-capture-our-memories25080954971ojpg-c749fe_765w.jpg'} info="left"
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
           image={'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D'} info="right" 
            link={"/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
            image={'https://www.threesixtycameras.com/wp-content/uploads/2016/02/go-hands-on-with-the-gear360-and-see-how-it-change-how-we-capture-our-memories25080954971ojpg-c749fe_765w.jpg'} info="left"
            link={"/"}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <BannerBoxV2
           image={'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D'} info="right" 
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerV2;
