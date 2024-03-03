import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import axios from "axios";

function Home() {
  const [categorys, setCategory] = useState([]);
  const getAllCategory = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`
    );
    setCategory(data.categories);
    console.log(categorys);
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <Swiper 
      className="swiper mt-5"
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {categorys.map((category, index) => (
        <SwiperSlide key={index}>
          <div className="swiperWithImage">
            <img src={category.image.secure_url} className="img-fluid w-2" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Home;
