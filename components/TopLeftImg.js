import Image from "next/image";

const TopLeftImg = () => {
  return (
      <div className='topLeftImg'>
        <Image src={'/top-left-img.png'} alt='' width={400} height={400} />
      </div>
  );
};

export default TopLeftImg;
