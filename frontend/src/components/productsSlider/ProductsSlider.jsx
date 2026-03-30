import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductBox from "../productBox/ProductBox";

const products = [
  { id: 1, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Embroidered Kurta Pant", brand: "Lizord Fab", price: 799, oldPrice: 1599, rating: 240, discount: 50 },
  { id: 2, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Cotton Printed Kurti", brand: "Jaipur Fab", price: 499, oldPrice: 999, rating: 180, discount: 50 },
  { id: 3, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Anarkali Suit with Dupatta", brand: "Ethnic Wear", price: 999, oldPrice: 1999, rating: 320, discount: 50 },
  { id: 4, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Straight Kurta Set", brand: "FabIndia", price: 649, oldPrice: 1299, rating: 150, discount: 50 },
  { id: 5, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Palazzo Kurta Set", brand: "W for Woman", price: 899, oldPrice: 1799, rating: 200, discount: 50 },
  { id: 6, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Floral Print Kurta", brand: "Biba", price: 599, oldPrice: 1199, rating: 275, discount: 50 },
  { id: 7, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Designer Party Wear Kurti", brand: "Anouk", price: 1199, oldPrice: 2399, rating: 310, discount: 50 },
  { id: 8, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70", name: "Casual Daily Wear Kurti", brand: "Global Desi", price: 399, oldPrice: 799, rating: 190, discount: 50 },
];

const ProductsSlider = ({ items }) => {
  return (
    <div>
      <section className="productsSlider py-3">
        <Swiper
          slidesPerView={items}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="py-8">
              <ProductBox {...product} />  {/* ← one product per slide */}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ProductsSlider;