import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <>
<div className="bg-[#0B2952]">


    <div className="  mt-5 pl-5 pt-10">
      <div className="text-white mb-16">
      <p className="md:text-3xl text-xs">Services</p>
      <p className="md:text-4xl text-xl my-5">A smarter container transport business</p>
      <p className="md:text-xl font-normal text-[8px]">AN ON-DEMAND CONTAINER TRANSPORT SOLUTION THAT WORKS, UTILISING THE LATEST IN GPS, </p>
      </div>


    </div>

    <div className="">
  <ServicesCard></ServicesCard>
</div>
</div>

    </>
  );
};

export default Services;