import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const HomeSliderV2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item overflow-hidden rounded-md relative">
            <img
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1920&auto=format&fit=crop"
              className="w-full object-cover h-[70vh]"
            />

            <div className="info absolute top-0 right-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center">
              <h4 className="text-[18px] font-medium w-full text-left mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-bold w-full">
                Women Solid Round Green T-Shirt
              </h2>

              <h3 className="text-[18px] font-medium w-full text-left mb-3 flex items-center  gap-3">
                Starting At Only
                <span className="text-[#ff5252] text-[30px] font-bold">
                  $59.00
                </span>
              </h3>
              <div className="w-full">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1920&auto=format&fit=crop"
              className="w-full object-cover h-[70vh]"
            />
            <div className="info absolute top-0 right-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center">
              <h4 className="text-[18px] font-medium w-full text-left mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-bold w-full">
                Women Solid Round Green T-Shirt
              </h2>

              <h3 className="text-[18px] font-medium w-full text-left mb-3 flex items-center  gap-3">
                Starting At Only
                <span className="text-[#ff5252] text-[30px] font-bold">
                  $59.00
                </span>
              </h3>
              <div className="w-full">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1920&auto=format&fit=crop
        <SwiperSlide>
          <div className="item overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1920&auto=format&fit=crop"
              className="w-full object-cover h-[70vh] object-right"
            />
            <div className="info absolute top-0 right-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center">
              <h4 className="text-[18px] font-medium w-full text-left mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-bold w-full">
                Women Solid Round Green T-Shirt
              </h2>

              <h3 className="text-[18px] font-medium w-full text-left mb-3 flex items-center  gap-3">
                Starting At Only
                <span className="text-[#ff5252] text-[30px] font-bold">
                  $59.00
                </span>
              </h3>
              <div className="w-full">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1920&auto=format&fit=crop"
              className="w-full object-cover  h-[70vh] object-right"
            />
            <div className="info absolute top-0 right-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center">
              <h4 className="text-[18px] font-medium w-full text-left mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-bold w-full">
                Women Solid Round Green T-Shirt
              </h2>

              <h3 className="text-[18px] font-medium w-full text-left mb-3 flex items-center  gap-3">
                Starting At Only
                <span className="text-[#ff5252] text-[30px] font-bold">
                  $59.00
                </span>
              </h3>
              <div className="w-full">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSliderV2;
