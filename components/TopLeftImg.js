import Image from "next/image";

const TopLeftImg = () => {
  return (
      <div className='absolute top-0 left-0 z-10 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50'>
        <Image src={'/top-left-img.png'} alt='' width={400} height={400} />
      </div>
  );
};

export default TopLeftImg;
