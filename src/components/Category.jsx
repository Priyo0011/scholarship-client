import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpeg";
import slide6 from "../assets/images/slide6.jpeg";
import slide7 from "../assets/images/slide7.jpg";
import slide8 from "../assets/images/slide8.jpg";
import slide9 from "../assets/images/slide9.jpg";
const Category = () => {
    return (
        <section className="w-[1520px] mx-auto">
            <h1 className="text-4xl text-center text-[#890C25] font-bold my-10">Our Gallery</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide2} alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide3} alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide4} alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[200px] w-[400px]" src={slide9} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
    );
};

export default Category;