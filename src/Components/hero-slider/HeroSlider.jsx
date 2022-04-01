import React from 'react'
import "./HeroSlider.scss"

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button, { OutlineButton } from '../button/Button';

function HeroSlider() {
    SwiperCore.use([Autoplay])

    return (
       <div className="hero-slide">
           <Swiper 
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
           >
               <SwiperSlide>
                    <div className="hero-slide__item active" 
                        style={ {backgroundImage: `url("https://image.tmdb.org/t/p/original//ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg")`} }
                    >
                        <div className="hero-slide__item--content">
                            <div className="hero-slide__item--content-info">
                                <h3 className='title'>The Adam Project</h3>
                                <p className='overview'>After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.</p>
                                <div className="btns">
                                    <Button>Watch now</Button>
                                    <OutlineButton>Watch trailer</OutlineButton>
                                </div>
                            </div>
                            <div className="hero-slide__item--content-poster">
                                <img src="https://image.tmdb.org/t/p/w500//wFjboE0aFZNbVOF05fzrka9Fqyx.jpg" className='poster' alt="" />
                            </div>
                       </div>
                   </div>
               </SwiperSlide>
           </Swiper>
       </div>
    )
}

export default HeroSlider
