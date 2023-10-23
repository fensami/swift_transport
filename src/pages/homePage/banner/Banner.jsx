import { Link } from "react-router-dom";
import bannerIcon from "../../../assets/banner icon.png";
import BannerSwift from "./BannerSwift";
const MyComponent = () => {
  const imageUrl = "https://i.ibb.co/9ZGRqxN/banner.png";
  const containerStyle = {
    height: "100vh",
  };

  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
  };

  return (
   <>
    <div style={containerStyle}>
      <div className="md:h-full h-96" style={imageStyle}>


        <div className="  relative  h-full w-full">
      
      <div className="bg-black bg-opacity-30 w-full h-full text-white">

         <div className="md:flex hidden justify-end mr-7 pt-10">
         <img src={bannerIcon} alt="" />
         </div>
      <div className="text-right text-base hidden md:flex justify-end gap-5 mr-10">
      <Link to='/SwiftTransfort'>WHY SWIFT TRANSPORT</Link>
          <p className="underline">FLEET</p>
          <p>COMPANY POLICIES</p>
          <p>ABOUT US</p>
          <p>Contact Us</p>
      </div>

      <div className="md:flex hidden justify-end items-center gap-5 mr-10 mt-5 text-xl">
        <p className="bg-[#ED1B248C] py-1 px-2 rounded-md font-bold">Swift Intermodal</p>
        <p>Container Transport Solutions</p>
        <p>Complete Warehousing Solutions</p>
      </div>
      </div>
        
        <div className="md:absolute md:bottom-0 md:right-10 text-white md:text-right">
          <p className="text-xs font-bold md:text-5xl mb-5 md:font-normal">Cheaper delivery costs through <br /> innovative vehicle design</p>
          <p className="text-2xl md:block hidden mb-3 font-normal">OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS <br /> CAN’T. YOU WILL BE PLEASANTLY SUPRISED</p>
      <div className="md:flex hidden justify-end gap-5">
      <p className="text-base font-bold">Taxi and Courier truck</p>
          <p className="mb-10">----</p>
      </div>
        </div>
        </div>


      </div>
    </div>

    <div>
      <BannerSwift></BannerSwift>
    </div>
   </>
  );
};

export default MyComponent;
