import Banner from "../../components/Shared/Banner";
import Navbar from "../../components/Shared/Navbar";


const Home = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;