import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { BsGift } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { PiChartPieSliceBold } from "react-icons/pi";
import { RiBankLine } from "react-icons/ri";
import { RiProductHuntLine } from "react-icons/ri";

const DashboardBox = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={9}
        navigation={true} //
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box bg-[#3872fa] hover:bg-[#2b5cce] p-6 cursor-pointer text-white transition-all rounded-md flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <BsGift size={27} />
              </div>
              <div className="leading-tight">
                <h3>New Orders</h3>
                <b>1,390</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-white text-[50px]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box p-6 bg-[#10b981] hover:bg-[#199c70] cursor-pointer text-white  transition-all rounded-md border  flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <PiChartPieSliceBold size={29}  />
              </div>
              <div className="leading-tight">
                <h3>Sales</h3>
                <b>$57890</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-white text-[50px]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box p-6 bg-[#ff5252] hover:bg-[#d93a3a] cursor-pointer text-white transition-all rounded-md flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <RiBankLine size={27} />
              </div>
              <div className="leading-tight">
                <h3>Revenue</h3>
                <b>$12,390</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-white text-[50px]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box p-6 bg-[#7928ca] hover:bg-[#6825ab] rounded-md cursor-pointer text-white transition-all  flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <RiProductHuntLine size={27} />
              </div>
              <div className="leading-tight">
                <h3>Total Products</h3>
                <b>1,390</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-white text-[50px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBox;
