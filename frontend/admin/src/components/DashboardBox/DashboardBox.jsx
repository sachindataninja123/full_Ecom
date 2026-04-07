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
          <div className="box bg-white p-6 cursor-pointer hover:bg-gray-100  transition-all rounded-md border border-[rgba(0,0,0,0.3)] flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <BsGift size={27} className="text-[#3872fa]" />
              </div>
              <div className="leading-tight">
                <h3>New Orders</h3>
                <b>1,390</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-[#3872fa] text-[50px]" />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="box p-6 bg-white cursor-pointer hover:bg-gray-100  transition-all rounded-md border border-[rgba(0,0,0,0.3)] flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <PiChartPieSliceBold size={29} className="text-[#10b981]" />
              </div>
              <div className="leading-tight">
                <h3>Sales</h3>
                <b>$57890</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-[#10b981] text-[50px]" />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="box p-6 bg-white cursor-pointer hover:bg-gray-100  transition-all rounded-md border border-[rgba(0,0,0,0.3)] flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <RiBankLine size={27} className="text-[#7928ca]" />
              </div>
              <div className="leading-tight">
                <h3>Revenue</h3>
                <b>$12,390</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-[#7928ca] text-[50px]" />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="box p-6 bg-white rounded-md cursor-pointer hover:bg-gray-100  transition-all  border border-[rgba(0,0,0,0.3)] flex items-center justify-between gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <div>
                <RiProductHuntLine size={27} className="text-[#312be18d]" />
              </div>
              <div className="leading-tight">
                <h3>Total Products</h3>
                <b>1,390</b>
              </div>
            </div>
            <IoStatsChartSharp className="text-[#312be18d] text-[50px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBox;
