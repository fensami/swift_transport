
import { useState } from 'react';
import arrow from '../../../assets/Arrow 1.png'
import { useEffect } from 'react';
const ServicesCard = () => {
  const [Services, setServices] = useState([])
  useEffect(()=> {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))   
  },[])
  return (
    <>
   <div className='grid grid-cols-2 md:grid-cols-3 md:mx-[20px] gap-5 pb-10'>
   {
      Services.map((Service, i) =><div key={i}>
      <article className="bg-white relative rounded-tr-[60px] md:h-[558px] md:w-[420px] w-[180px] h-[240px] rounded-bl-[60px]">
        <p className="md:text-2xl text-[10px] font-semibold md:pr-9 md:pl-3 p-2 md:pt-8 md:font-semibold">
          Transport - Container, Tautliner, Bulk
        </p>
<div className="flex md:mt-10 justify-center">
<img className='md:h-fit h-[48px] w-[70px] md:w-fit' src={Service.image} alt="" />

</div>
        <p className="px-4 mt-5 md:text-xl text-[8px]">Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>



        <div className="absolute bottom-0 right-0 my-10 mr-10">
        <img className='fill-green-400' src={arrow} alt="" />
        </div>



      </article>
   
    
      

      
    </div> )
    }
   </div>
    </>
    
  );
};

export default ServicesCard;
