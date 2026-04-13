import React from "react";
import CategorySlider from "../../components/CatSlider/CategorySlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBanner from "../../components/adsBannerSlider/AdsBanner";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import BlogBox from "../../components/BlogItem/BlogBox";

import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeSliderV2 from "../../components/HomeSliderV2/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2/BannerBoxV2";
import AdsBannerV2 from "../../components/AdsBannersliderV2.jsx/AdsBannerV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
{/* 
      <section className="py-6">
        <div className="container flex items-center sliderHome gap-4 ">
          <div className="part1 w-[70%]">
            <HomeSliderV2 />
          </div>

          <div className="part2 w-[30%] flex items-center justify-center gap-3 flex-col">
            <BannerBoxV2 image={'https://www.threesixtycameras.com/wp-content/uploads/2016/02/go-hands-on-with-the-gear360-and-see-how-it-change-how-we-capture-our-memories25080954971ojpg-c749fe_765w.jpg'} info="left" />
            <BannerBoxV2 image={'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D'} info="right" />
          </div>
        </div>
      </section> */}

      <CategorySlider />

      {/* popular products section */}
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec">
              <h2 className="text-2xl font-semibold uppercase">
                Popular Products
              </h2>
              <p className="font-normal">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="rightsec w-[55%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="bags" />
                <Tab label="Footwear" />
                <Tab label="groceries" />
                <Tab label="jewellery" />
                <Tab label="beauty" />
                <Tab label="wellness" />
                <Tab label="accessories" />
                <Tab label="Cameras" />
                <Tab label="Headphones" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      {/* free shipping and banner section */}
      <section className="py-12 pt-2 bg-white ">
        <div className="container">
          <div className="freeShipping w-[85%] m-auto p-4 flex justify-between items-center border-2 rounded-sm  border-[#ff5252] px-15 mb-6">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-6xl font-semibold" />
              <span className="uppercase font-semibold text-2xl">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              Free Delivery Now On Your First Order and over $200
            </div>
            <div className="col3">
              <h1 className="font-bold text-3xl">- ONLY $200*</h1>
            </div>
          </div>

          <AdsBannerV2 items={4} />
        </div>
      </section>

      {/* LATEST PRODUCT SECTION */}
      <section className="py-6 pt-2 bg-white">
        <div className="container">
          <h2 className="text-2xl font-semibold uppercase">Latest Products</h2>
          <p className="font-normal">
            Do not miss the current offers until the end of March.
          </p>
          <ProductsSlider items={6} />

          <AdsBanner items={3} />
        </div>
      </section>

      {/* Featured PRODUCT SECTION */}
      <section className="py-6 pt-0 bg-white">
        <div className="container">
          <h2 className="text-2xl font-semibold uppercase">
            Featured Products
          </h2>
          <p className="font-normal">
            Do not miss the current offers until the end of March.
          </p>
          <ProductsSlider items={6} />
        </div>
      </section>

      {/* blog section */}
      <section className="py-5 pt-0 bg-white  pb-8 blogSection">
        <div className="container">
          <h2 className="text-2xl font-semibold uppercase mb-4">
            From the Blog...
          </h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBox />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
