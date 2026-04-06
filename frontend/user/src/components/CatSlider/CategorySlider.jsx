import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";

const categories = [
  {
    id: 1,
    name: "Smart Tablet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/tablets",
  },
  {
    id: 2,
    name: "Smartphones",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/smartphones",
  },
  {
    id: 3,
    name: "Laptops",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/laptops",
  },
  {
    id: 4,
    name: "Headphones",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/headphones",
  },
  {
    id: 5,
    name: "Cameras",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/cameras",
  },
  {
    id: 6,
    name: "Smartwatch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/smartwatch",
  },
  {
    id: 7,
    name: "Gaming",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/gaming",
  },
  {
    id: 8,
    name: "Accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/accessories",
  },
  {
    id: 9,
    name: "Speakers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/speakers",
  },
  {
    id: 10,
    name: "Monitors",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/monitors",
  },
  {
    id: 10,
    name: "Monitors",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/monitors",
  },
  {
    id: 10,
    name: "Monitors",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/monitors",
  },
  {
    id: 10,
    name: "Monitors",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/monitors",
  },
  {
    id: 10,
    name: "Monitors",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYkyenX7dbmhL0I-loQ36zlMJdfNt4GyM_w&s",
    path: "/monitors",
  },
];

const CategorySlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link to={cat.path}>
                <div className="item bg-white rounded-sm flex items-center justify-center flex-col px-3 py-7">
                  <img
                    src={cat.image}
                    className="w-20 h-25 object-cover transition-all"
                    alt={cat.name}
                  />
                  <h3 className="font-semibold mt-3 text-[15px]">{cat.name}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
