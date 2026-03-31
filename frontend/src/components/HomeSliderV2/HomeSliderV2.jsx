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
      loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay ={{
            delay:2500,
            disableOnInteraction : false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homesliderV2"
      >
        <SwiperSlide>
          <div className="item overflow-hidden rounded-md relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/031/132/685/large_2x/portrait-asian-beautiful-girl-shy-smile-blank-space-isolated-background-happy-woman-on-vacation-young-female-smiling-success-billboard-introduction-advertisement-attractive-expression-positive-photo.jpg"
              className="w-full object-cover h-[70vh]"
            />

            <div className="info absolute top-0 -right-full opacity-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
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
              src="https://www.shutterstock.com/shutterstock/photos/2123816945/display_1500/stock-photo-beautiful-young-asian-woman-pointing-up-to-copy-space-and-looking-at-camera-with-smile-face-and-2123816945.jpg"
              className="w-full object-cover h-[70vh]"
            />
          <div className="info absolute top-0 -right-full opacity-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
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
              src="https://www.shutterstock.com/image-photo/headphones-books-educational-concept-white-260nw-2580393385.jpg"
              className="w-full object-cover h-[70vh] object-right"
            />
             <div className="info absolute top-0 -right-full opacity-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
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
              src="https://st.depositphotos.com/71989564/60973/i/450/depositphotos_609739820-stock-photo-banner-new-pair-white-sneakers.jpg"
              className="w-full object-cover  h-[70vh] object-right"
            />
            <div className="info absolute top-0 -right-full opacity-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
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
