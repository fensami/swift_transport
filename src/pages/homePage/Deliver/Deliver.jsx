import "./Deliver.css";
import DeliverCard from "./DeliverCard";
const Deliver = () => {
  return (
    <>
      <div className="deliverBg grid grid-cols-2 gap-10">
        <img
          className="w-[768px] pt-28 pl-10"
          src="https://i.ibb.co/7zQY4z4/Rectangle-29.png"
          alt=""
        />

        <div>
          <p className="text-3xl font-bold mb-10 mt-28">
            We deliver, no matter <br /> how hard the challenge.
          </p>
          <img
            className="mb-14 w-[400px] h-[200]"
            src="https://i.ibb.co/yQL79f4/image-8.png"
            alt=""
          />
          <p className=" text-white mb-16 text-3xl font-bold underline">
            Kennards Hire Case Study
          </p>
        </div>
      </div>

    <DeliverCard></DeliverCard>
    </>
  );
};

export default Deliver;
