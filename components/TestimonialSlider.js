import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {FaQuoteLeft} from "react-icons/fa";
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Sarah Johnson',
    position: 'Customer',
    message:
        'Working with Bohdan was a game-changer! Their innovative solutions and attention to detail transformed our project. Grateful for their expertise and commitment to excellence.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Emily Parker',
    position: 'Customer',
    message:
        'Bohdan exceeded expectations! Their coding prowess and problem-solving skills ensured a seamless project. A pleasure to collaborate with—highly recommended!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Max Vasiliev',
    position: 'Customer',
    message:
        'Bohdan delivered exceptional results! Their dedication to quality development and effective communication made the process smooth and enjoyable. Thrilled with the outcome!',
  },
];

const TestimonialSlider = () => {
  return (
      <Swiper
          className='h-[400px]'
          slidesPerView={1}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Navigation]}
          navigation
      >
        {testimonialData.map((person, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt='' />
                    </div>
                    <div className='text-lg'>{person.name}</div>
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                  </div>
                </div>
                <div
                    className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                  </div>
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default TestimonialSlider;

