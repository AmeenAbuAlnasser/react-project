import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import axios from "axios";
import Loder from "../../Loader/Loder";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const [categorys, setCategory] = useState([]);
  const [loder, setLoder] = useState(true);
  const [error, setError] = useState("");
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=10`
      );

      setCategory(data.categories);
      setLoder(false);
      setError("");
    } catch (error) {
      setLoder(false);
      setError("Error");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  if (loder) {
    return <Loder />;
  }

  return (
    <>
      <div className="section1">
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {categorys.map((category) => (
              <SwiperSlide key={category.id}>
                <Link to={`/products/${category.id}`}>
                  <img src={category.image.secure_url} alt={category.name} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home;
