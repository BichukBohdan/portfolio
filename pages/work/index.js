import {motion} from 'framer-motion'
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import {fadeIn} from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
      <div className='h-full bg-primary/30 py-36 flex items-center'>
        <Circles/>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2
                  className="h2 xl:mt-12"
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
              >
                My work <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
              >
                Explore a showcase of my work, where every project tells a unique digital story. From dynamic websites
                to immersive mobile apps, each endeavor reflects my commitment to innovation and excellence in the world
                of development. Dive into the portfolio to witness the intersection of creativity and precision.
              </motion.p>
            </div>
            <motion.div
                className='w-full xl:max-w-[65%]'
                variants={fadeIn('down', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
            >
              <WorkSlider/>
            </motion.div>
          </div>
        </div>
        <Bulb/>
      </div>
  );
};

export default Work;
