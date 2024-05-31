import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/images/01.jpg'
import img2 from '../../assets/images/02.webp'
import img3 from '../../assets/images/03.png'
const Banner = () => {
  return (
    <Carousel className="mb-16">
      <div className="md:h-[804px]">
        <img src={img1} />
      </div>
      <div className="md:h-[804px]">
        <img src={img2} />
      </div>
      <div className="md:h-[804px]">
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default Banner;
