import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const ProductZoom = () => {
  const images = [
    "https://www.jiomart.com/images/product/original/rv7a4utyd1/yuan-women-s-rayon-floral-print-angrakha-kurti-pant-set-kurta-suit-set-for-women-product-images-rv7a4utyd1-0-202512141733.jpg?im=Resize=(600,750)",

    "https://www.jiomart.com/images/product/original/rv7a4utyd1/yuan-women-s-rayon-floral-print-angrakha-kurti-pant-set-kurta-suit-set-for-women-product-images-rv7a4utyd1-1-202512141733.jpg?im=Resize=(600,750)",

    "https://www.jiomart.com/images/product/original/rv7a4utyd1/yuan-women-s-rayon-floral-print-angrakha-kurti-pant-set-kurta-suit-set-for-women-product-images-rv7a4utyd1-2-202512141733.jpg?im=Resize=(600,750)",

    "https://www.jiomart.com/images/product/original/rv7a4utyd1/yuan-women-s-rayon-floral-print-angrakha-kurti-pant-set-kurta-suit-set-for-women-product-images-rv7a4utyd1-3-202512141733.jpg?im=Resize=(600,750)",
    "https://www.jiomart.com/images/product/original/rv7a4utyd1/yuan-women-s-rayon-floral-print-angrakha-kurti-pant-set-kurta-suit-set-for-women-product-images-rv7a4utyd1-4-202512141733.jpg?im=Resize=(600,750)",
    "https://www.jiomart.com/images/product/original/rv7a4utyd1/yuan-women-s-rayon-floral-print-angrakha-kurti-pant-set-kurta-suit-set-for-women-product-images-rv7a4utyd1-5-202512141733.jpg?im=Resize=(600,750)",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="w-full max-w-120">
      {/* 🔍 Main Image */}
      <div className=" rounded-md overflow-hidden">
        <InnerImageZoom
          src={activeImage}
          zoomSrc={activeImage}
          zoomType="hover"
          zoomScale={1}
          className="w-full h-120 object-cover rounded-md overflow-hidden transition-all"
        />
      </div>

      {/* 🖼️ Thumbnails */}
      <div className="flex gap-1 mt-3 overflow-x-auto scroll-smooth scrollbar-hide group thumbnails">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(img)}
            className={`shrink-0 rounded-sm cursor-pointer transition-all 
              ${activeImage === img ? "opacity-30" : "opacity-100"}
            `}
          >
            <img
              src={img}
              alt="thumb"
              className="w-24.5 h-28.5 object-cover overflow-hidden rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductZoom;
