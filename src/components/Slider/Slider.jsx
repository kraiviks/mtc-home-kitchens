import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import PropTypes from 'prop-types';
import Button from '@components/Button';

const Slider = ({ data, navigation, pagination, className, classNameContainer }) => {
  const customPagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <Swiper
      className={`slider ${className}`}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Autoplay, Pagination]}
      navigation={navigation}
      pagination={pagination && customPagination}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
    >
      {data.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className={classNameContainer}>
              <h4>{slide.upperDesc}</h4>
              <h2>{slide.title}</h2>
              {slide.desc && <p>{slide.desc}</p>}
              {slide.author && <span>{slide.author}</span>}
              {slide.btn?.label && <Button label={slide.btn.label} onClick={() => ''} className='slider-btn' />}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.bool,
  pagination: PropTypes.bool,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
};

Slider.defaultProps = {
  data: [],
  navigation: false,
  pagination: false,
  classNameContainer: 'slide-container',
};

export default Slider;
