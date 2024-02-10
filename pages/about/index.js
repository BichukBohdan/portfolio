// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma, FaVuejs, FaAngular, FaNodeJs,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop, SiExpress, SiNestjs,
} from "react-icons/si";
import {useState} from "react";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";

import {motion} from 'framer-motion'
import {fadeIn} from "../../variants";
import CountUp from "react-countup";
import {TbBrandReactNative} from "react-icons/tb";


//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Frontend Development',
                icons: [
                    <FaHtml5 key='html' />,
                    <FaCss3 key='css' />,
                    <FaJs key='js' />,
                    <FaReact key='react' />,
                    <FaVuejs key='vue' />,
                    <FaAngular key='angular' />,
                    <SiNextdotjs key='next' />,
                ],
            },
            {
                title: 'Backend Development',
                icons: [<FaNodeJs key='node' />, <SiExpress key='express' />, <SiNestjs key='nest' />],
            },
            {
                title: 'Mobile Development',
                icons: [<TbBrandReactNative key='native' />],
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Fullstack Developer - Avense Tech',
                stage: '2022 - present',
            },
            {
                title: 'Fullstack Developer - YozmaTech',
                stage: '2021 - 2022',
            },
            {
                title: 'Frontend Developer - Olimp Digital',
                stage: '2020 - 2021',
            },
            {
                title: 'Frontend Developer - Dual Education Ukraine',
                stage: '2019 - 2020',
            },
        ],
    },
    {
        title: 'education',
        info: [
            {
                title: 'Bachelor\'s degree in Computer Science - Polissia National University, Ukraine, Zt',
                stage: '2018 - 2022',
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
            <Circles/>
            <motion.div
                className='hidden xl:flex absolute bottom-0 -left-[370px]'
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
            >
                <Avatar/>
            </motion.div>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center z-10'>
                    <motion.h2
                        className='h2'
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >Elevating <span className='text-accent'>ideas</span> through expert development.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                    >
                        Embarking on a journey that merges passion with precision in development. From collaborative projects with agencies to providing strategic insights for startups, my dedication to crafting tailored digital solutions defines my approach. As a committed full-stack developer, join me in exploring a portfolio that reflects a profound commitment to the art and science of innovative coding and development expertise.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
                    >
                        <div className='flex flex-1 xl:gap-x-6'>
                            <Achievement counterValue={5} text='Years of experience' border/>
                            <Achievement counterValue={50} text='Satisfied clients' border/>
                            <Achievement counterValue={70} text='Finished projects' />
                            {/*<Achievement counterValue={8} text='Winning award'/>*/}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => (
                            <div
                                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                                key={itemIndex}
                                onClick={() => setIndex(itemIndex)}
                            >{item.title}</div>
                        ))}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => (
                            <div
                                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                                key={itemIndex}>
                                <div className='font-light mb-2 md:mb-0 max-w-[350px]'>{item.title}</div>
                                <div className='hidden md:flex'>-</div>
                                <div>{item.stage}</div>
                                <div className='flex gap-x-4'>
                                    {item.icons?.map((icon, itemIndex) => (
                                        <div className='text-2xl text-white' key={itemIndex}>{icon}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div
                >
            </div>
        </div>
    );
};

export default About;

const Achievement = ({counterValue, text, border = false}) => {
    return (
        <div
            className={`relative flex-1 ${border && 'after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'}`}>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={counterValue} duration={5}/> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{text}</div>
        </div>
    )
}
