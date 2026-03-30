import React from "react";
import Slider from "../../components/HomeSlider/Slider";
import CategorySlider from "../../components/CatSlider/CategorySlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBanner from "../../components/adsBannerSlider/AdsBanner";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slider />
      <CategorySlider />

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

      <section className="py-16 bg-white ">
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

          <AdsBanner items={4} />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
