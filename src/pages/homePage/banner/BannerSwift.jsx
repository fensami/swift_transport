import truckimage from '../../../assets/swiftTruck.png'
import './Banner.css'
const BannerSwift = () => {
  return (
    <div className='relative'>
      <div className='bannerBg'>
      <img  className='' src={truckimage} alt="" />
      </div>
      <div className='bg-[#002A54] pt-2 w-40 h-32 md:h-96 md:w-[500px] absolute rounded-lg text-white md:bottom-20 bottom-5 left-5 md:left-12 border-2 border-white md:px-5 px-2 md:py-10'>
        <p className='md:text-3xl text-[8px] md:mb-10 font-bold mb-2'>A fleet capable of much more
than you’d think</p>
<p className='text-[6px] md:text-base font-normal'>With a diverse range of utes, trucks and semi-trailers, Swift Transport is capable of much more than you d think. Combine our versatile fleet wth our industry leading technology and can-do attitude for a winning logistics partnership with your organization.</p>
<p className='md:text-2xl text-[10px] text-right underline md:mt-10 font-bold'>Why Swift</p>
      </div>
    </div>
  );
};

export default BannerSwift;