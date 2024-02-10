import {motion} from 'framer-motion'
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";
import {fadeIn} from "../../variants";

const Services = () => {
  return (
      <div className='h-full bg-primary/30 py-36 flex items-center'>
        <Circles/>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2
                  className="h2 xl:mt-8"
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
              >
                My services <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
              >
                Empowering digital visions through comprehensive services. Specializing in full-stack development, I offer expertise in web and mobile solutions. From dynamic websites to interactive applications, my services encompass the entire development spectrum. Elevate your digital presence with tailored, innovative solutions.
              </motion.p>
            </div>
            <motion.div
                className='w-full xl:max-w-[65%]'
                variants={fadeIn('down', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
            >
              <ServiceSlider/>
            </motion.div>
          </div>
        </div>
        <Bulb/>
      </div>
  );
};

export default Services;
