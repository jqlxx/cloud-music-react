import React, { useEffect, useState } from 'react';
import "swiper/swiper-bundle.min.css";
import Swiper from 'swiper'
import { SliderContainer } from './style'

function Slider(props) {
  const [sliderSwiper, setSliderSwiper ] = useState(null)
  const { bannerList } = props

  useEffect(() => {
    if(bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3,
          disableOnInteraction: false
        },
        pagination: {el: '.swiper-pagination'}
      })
      setSliderSwiper(sliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐banner" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default Slider