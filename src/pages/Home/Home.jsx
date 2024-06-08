
import Category from "../../components/Category";
import ContactUs from "../../components/ContactUs/ContactUs";
import Reviews from "../../components/Reviews";
import TopScholarship from "../../components/Scholarship/TopScholarship";
import Banner from "../../components/Shared/Banner";



const Home = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Banner></Banner>
            <TopScholarship></TopScholarship>
            <ContactUs></ContactUs>
            <Reviews></Reviews>
            <Category></Category>
        </div>
    );
};

export default Home;