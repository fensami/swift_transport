import ContactUs from "../ContactUs/ContactUs";
import Deliver from "../Deliver/Deliver";
import GoodCompany from "../GoodCompany/GoodCompany";
import News from "../News/News";
import Services from "../Services/Services";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
<Banner></Banner>    
<Services></Services>
<News></News>
<ContactUs></ContactUs>
<GoodCompany></GoodCompany>
<Deliver></Deliver>
</div>
  );
};

export default Home;