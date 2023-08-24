import React from 'react'
import './Test.css'
import Hero from '../../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TestimonialsData } from '../../data/testimonials'

const Test = () => {
  return (
    <div className="test">
      <div className="t-wrapper">
        <div className="t-container">
          <span>Top Rated</span>
          <span>
            AutoAnimate is a zero-config, drop-in animation utility that adds.
          </span>
        </div>

        <img src={Hero} alt="" />
        <div className="t-container2">
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
      <div className="reviews">Reviews</div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tCarousel"
        >
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide>
              <div className="testimonial">
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Test
