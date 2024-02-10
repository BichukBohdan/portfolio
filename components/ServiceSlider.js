// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket, RxArrowRight,
} from "react-icons/rx";

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {FreeMode, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {SiAndroid, SiCodecademy, SiNodedotjs, SiShopify, SiWebmoney} from "react-icons/si";


// data
const serviceData = [
  {
    icon: <SiWebmoney />,
    title: 'Web Development',
    description: 'Crafting websites with precision. Elevate your online presence.',
  },
  {
    icon: <SiAndroid />,
    title: 'Mobile Development',
    description: 'Transforming ideas into mobile experiences. Seamless, captivating.',
  },
  {
    icon: <SiNodedotjs />,
    title: 'Backend Development',
    description: 'Building robust server-side solutions. Reliable infrastructure.',
  },
  {
    icon: <SiCodecademy />,
    title: 'Dev Consultation & Strategy',
    description: 'Strategic insights for coding success. Optimize efficiency.',
  },
  {
    icon: <SiShopify />,
    title: 'E-commerce Development',
    description: 'Developing robust e-commerce solutions. Secure transactions.',
  },
];

const ServiceSlider = () => {
  return (
      <Swiper
          className='h-[240px] sm:h-[400px]'
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          freeMode
      >
        {serviceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-[85%] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                <div className='text-3xl mt-auto mb-0'>
                  <RxArrowRight className='-rotate-45 group-hover:rotate-0 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default ServiceSlider;
