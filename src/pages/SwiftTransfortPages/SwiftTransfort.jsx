import { Link } from "react-router-dom";
import TransFort from "./TransFort";
import WhySwift from "./WhySwift/WhySwift";
import CaseStudies from "./CaseStudies/CaseStudies";
import Testimonials from "./Testimonials/Testimonials";
import DeliverCard from "../homePage/Deliver/DeliverCard";
const SwiftTransfort = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r text-white from-[#00152B] via-[#135495] to-[#17528E] text-right pb-8 pr-12">
        <article className="flex gap-7 justify-end pt-28 pb-5 ">
          <Link className="text-base font-bold">WHY SWIFT TRANSPORT</Link>
          <Link>FLEET</Link>
          <Link>COMPANY POLICIES</Link>
          <Link>ABOUT US</Link>
          <Link>Contact Us</Link>
        </article>
        <article className="flex justify-end gap-7">
          <Link className="bg-[#ED1B248C] py-1 px-2 rounded-md font-bold">
            Swift Intermodal
          </Link>
          <Link>Container Transport Solutions</Link>
          <Link>Complete Warehousing Solutions</Link>
        </article>
      </div>

      <div className="relative">
        <img src="https://i.ibb.co/sjXchP3/Rectangle-68.png" alt="" />

        <div className="absolute top-20 right-10 text-right text-white">
          <h1 className="text-5xl font-bold mb-8">Why Swift Transport</h1>
          <p className="text-3xl font-normal">
            Here from our loyal customers about why <br /> they’re happy to
            recommend us to you.
          </p>
        </div>
      </div>

      <p className="ml-10 mt-10 text-base font-normal">Home / Why Swift Transport</p>

      <div>
        <TransFort></TransFort>
      </div>

      <div>
        <WhySwift></WhySwift>
      </div>

      <div>
        <CaseStudies></CaseStudies>
      </div>

      <div>
        <Testimonials></Testimonials>
      </div>
      <div className="bg-white">
        <DeliverCard></DeliverCard>
      </div>
    </div>
  );
};

export default SwiftTransfort;
