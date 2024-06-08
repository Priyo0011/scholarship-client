import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="w-[1520px] mx-auto mt-24 mb-24">
      <h1 className="text-4xl text-center text-[#890C25] font-bold my-10">
        Review
      </h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24">
              <p className="mt-4">{review.review_date}</p>
              <div>
                <img
                  className="w-12 rounded-full"
                  src={review.reviewer_image}
                  alt=""
                />
              </div>
              <p className=" text-center">{review.reviewer_comments}</p>
              <Rating
                style={{ maxWidth: 120 }}
                value={review.rating_point}
                readOnly
              />

              <h3 className="text-2xl text-[#D99904] uppercase">
                {review.reviewer_name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
