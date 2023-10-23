const Testimonials = () => {
  return (
    <div className="bg-white">
      <p className="text-4xl font-bold pt-12 pl-32">Testimonials</p>

      <div className="flex gap-5 mx-20 my-10">
        <img src="https://i.ibb.co/7Rqj415/Rectangle-33.png" alt="" />

        <div>
          <img
            className="w-10"
            src="https://i.ibb.co/bbQcZ0C/image.png"
            alt=""
          />
        </div>

        <div>
          <p className="w-[700px] mx-auto text-2xl font-normal">
            We use <span className="font-bold text-2xl">Swift Transport</span>{" "}
            for a few different outcomes, relocate equipment between Sydney and
            the Central Coast and an Hourly Work as Directed Service. We simply
            make a call and the next day a driver in a fully equipped ute
            arrives ready for work. When we need to send items to Sydney that
            are planned, it works out far better to use Swift than use our own
            vehicles. The vehicles are well presented, well fitted and the
            drivers are all very helpful, and the rate is always excellent.
          </p>

          <p className="text-right text-2xl font-normal">Peter Santwyk, <br />Allcott Hire, Nth Regional Area Mgr</p>
        </div>
      </div>

      {/* <div className="grid grid-cols-2">
        <div className="">

     <div className="relative">
     <img  className="w-[253px]  h-[318px]" src="https://i.ibb.co/7Rqj415/Rectangle-33.png" alt="" />

<div className="absolute top-0 left-0">
  <img src="https://i.ibb.co/bbQcZ0C/image.png" alt="" />
</div>
     </div>
        </div>



      <p className="">We use Swift Transport for a few different outcomes, relocate equipment between Sydney and the Central Coast and an Hourly Work as Directed Service. We simply make a call and the next day a driver in a fully equipped ute arrives ready for work. When we need to send items to Sydney that are planned, it works out far better to use Swift than use our own vehicles. The vehicles are well presented, well fitted and the drivers are all very helpful, and the rate is always excellent.</p>

      </div> */}
    </div>
  );
};

export default Testimonials;
