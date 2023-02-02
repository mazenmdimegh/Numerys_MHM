import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade,Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import './Swiper.scss'
import 'swiper/css/bundle'
const Swipe = ({Photos}) => {

    // const images = [
    //     moto,'https://mhm-motors-image-assets-dev.s3.eu-west-1.amazonaws.com/motor/images/av.png',
    //     'https://www.themilliardaire.com/wp-content/uploads/2021/07/aston-martin-brough-superior-amb-001-moto-8-800x600.jpg',
    //     'https://www.themilliardaire.com/wp-content/uploads/2021/07/aston-martin-brough-superior-amb-001-moto-8-800x600.jpg',
    //     'https://sf2.auto-moto.com/wp-content/uploads/sites/9/2018/05/yamaha-700-mt-07-2018-700px-700x410.jpg',
    //     'https://www.themilliardaire.com/wp-content/uploads/2021/07/aston-martin-brough-superior-amb-001-moto-8-800x600.jpg'
    // ]
    const images = [];
        for (let i = 0; i < Photos.length; i++) {
            images.push(Photos[i]['small']);
        }
    return (
        <div className="containers">
            <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                pagination={{ clickable: true }}
                effect
                speed={800}
                slidesPerView={1}
                loop
                className="myswiper" I
            >


                {
                    images.map((photo, i) =>
                        <SwiperSlide className="swiperslide">
                            <img src={`${photo.toString()}`} alt='' />
                        </SwiperSlide>)

                } 
                {/* <SwiperSlide className="swiperslide">
                    <img src=        'https://www.themilliardaire.com/wp-content/uploads/2021/07/aston-martin-brough-superior-amb-001-moto-8-800x600.jpg'
alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperslide">
                    <img src=        'https://sf2.auto-moto.com/wp-content/uploads/sites/9/2018/05/yamaha-700-mt-07-2018-700px-700x410.jpg'
 alt="" />
                </SwiperSlide> */}

            </Swiper>
  
        </div>
    )
}

export default Swipe