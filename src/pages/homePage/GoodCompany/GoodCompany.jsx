const GoodCompany = () => {
  return (
    <div className="bg-red-600 grid px-10 grid-cols-2 items-center">
      <div>
        <p className="text-4xl font-bold py-10">You’ll be in good company</p>
        <img
          className="w-[625px]"
          src="https://i.ibb.co/SQ4j6yQ/Rectangle-27.png"
          alt=""
        />
      </div>

      <div className="grid grid-cols-2 rounded-lg m-10 p-10 bg-white">
        <article className="">
          <img className="mb-16" src="https://i.ibb.co/qMJqtyJ/image-2.png" alt="" />
          <img className="mb-16" src="https://i.ibb.co/TLm87QW/image-5.png" alt="" />
          <img className="mb-16" src="https://i.ibb.co/YTpbD4Q/image-3.png" alt="" />
          <img src="https://i.ibb.co/Jc60v3R/image-4.png" alt="" />
        </article>

        <article>
          <img className="mb-16" src="https://i.ibb.co/m9p0zrF/image-6.png" alt="" />
          <img src="https://i.ibb.co/5ns8HyW/image-7.png" alt="" />
        </article>
      </div>
    </div>
  );
};

export default GoodCompany;
