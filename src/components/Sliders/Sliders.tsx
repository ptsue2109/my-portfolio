import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "./index.scss"
type Props = {};

const Sliders = (props: Props) => {
  const [image, imageSet] = useState<any>([]);

  React.useEffect(() => {
    async function fetchIMage() {
      let response = await fetch("http://localhost:3001/sliders");
      const json = await response.json();
      imageSet(json);
    }
    fetchIMage();
  }, []);
  return (
    <div className="home-content-sliders">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
         {image &&
          image.map((item: any) => (
            <a href="" key={item.id}>
              <SwiperSlide><img src={item.src} alt="" /></SwiperSlide>
            </a>
          ))}
      </Swiper>

    </div>
  );
};

export default Sliders;
