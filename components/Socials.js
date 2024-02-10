import {
  RiBehanceLine,
  RiDribbbleLine,
  RiFacebookLine,
  RiInstagramLine, RiLinkedinLine, RiMailLine,
  RiPinterestLine, RiTelegramLine, RiWhatsappLine,
  RiYoutubeLine
} from "react-icons/ri";
import Link from "next/link";

const Socials = () => {
  return (
      <div className='flex items-center gap-x-5 text-lg'>
        <Link target={'_blank'} href={'https://www.linkedin.com/in/bichukdev'} className='hover:text-accent transition-all duration-300'>
          <RiLinkedinLine />
        </Link>
        <Link target={'_blank'} href={'https://t.me/Bohdan_Bichuk'} className='hover:text-accent transition-all duration-300'>
          <RiTelegramLine />
        </Link>
        <Link target={'_blank'} href={'https://wa.me/+380631369853'} className='hover:text-accent transition-all duration-300'>
          <RiWhatsappLine />
        </Link>
        <Link target={'_blank'} href={'mailto:bichuk1234.kk@gmail.com'} className='hover:text-accent transition-all duration-300'>
          <RiMailLine />
        </Link>
      </div>
  )
};

export default Socials;
