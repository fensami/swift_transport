const TransFort = () => {
  return (
    <div className="bg-[#002A54] flex gap-5 justify-between text-white rounded-xl pl-10 py-10 m-10">

      <div className="flex-1">
        <p className="text-5xl font-bold underline mb-10">Why Swift Transport</p>
        <p className="mb-10 text-3xl font-normal">Here from our loyal customers about why they’re happy to recommend us to you.</p>
        <p className="text-xl font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text.</p>
        <button>Learn More</button>
      </div>

      <div className="flex-1">

        <div className="w-[416px] flex-col flex justify-center items-center bg-red-700 h-[263px] rounded-xl shadow-sm shadow-white">

        <img
          className="w-32 h-32"
          src="https://i.ibb.co/gD1PvSs/file-case.png"
          alt=""
          />
          <p className="text-xl font-bold">Case Study</p>
          </div>
          <div className="w-[416px] flex-col flex justify-center items-center bg-red-700 h-[263px] rounded-xl shadow-sm shadow-white mt-5">

        <img
          className="w-32 h-32"
          src="https://i.ibb.co/5YJFHvn/review.png"
          alt=""
          />
          <p className="text-xl font-bold">Testimonials</p>
          </div>
      </div>
    </div>
  );
};

export default TransFort;
