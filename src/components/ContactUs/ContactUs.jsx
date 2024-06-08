import { GrMapLocation } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="max-w-[1520px] mx-auto my-20">
      <div>
      <h1 className="text-center text-[#890C25] text-4xl font-bold mb-10">
        Contact Us
      </h1>
      </div>
      <div className="md:flex gap-10 text-center ">
        <div className="bg-base-200 w-full py-12">
          <GrMapLocation className="text-9xl ml-40 text-[#890C25]" />
          <p className="text-2xl font-light">400 Broome St, <br /> New York, NY 10013, USA</p>
        </div>
        <div className="bg-base-200  w-full py-12">
          <MdAddCall className="text-9xl ml-40 text-[#890C25]" />
          <p className="text-2xl font-light">+44 20 4154 2541 <br /> +44 20 4154 2542</p>
        </div>
        <div className="bg-base-200  w-full py-12">
          <IoTimeOutline className="text-9xl ml-40 text-[#890C25]" />
          <p className="text-2xl font-light">
            Mon-Fri: 9 AM – 6 PM <br /> Saturday: 9 AM – 4 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
