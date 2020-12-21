import React, { useEffect } from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderContainer } from './style'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination, Autoplay])

function Slider(props) {
  const { bannerList } = props

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-wrapper">
       
        <Swiper
          loop={true}
          pagination={{type: 'bullets'}}
          autoplay={{delay: 2000, disableOnInteraction: false}}
        >
          {
            bannerList.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.imageUrl} width="100%" height="100%" alt="推荐" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)