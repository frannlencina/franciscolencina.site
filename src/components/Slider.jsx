import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css'

function Slider(props) {
    return (
        <div className='container mt-8 w-5/6 mx-auto'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>
                {props.screens.map((url) => <SwiperSlide> <img className='object-cover' src={url} alt="Tecnologia utilizada." /> </SwiperSlide>)}
               
            </Swiper>
        </div>
    )
}

export default Slider