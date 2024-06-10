import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ScholarshipCard = ({ university }) => {
  const {
    university_name,
    university_image,
    scholarship_category,

    application_deadline,
    subject_category,
    rating,
    application_fees,
    _id
  } = university || {};
  return (
    <div className=" hover:shadow-lg hover:shadow-[#890C25] rounded-lg">
      <figure>
        <img className="h-[240px] w-full p-4 " src={university_image} alt="" />
      </figure>
      <div className="p-4">
        <div>
          <h1>
            <span className="font-semibold text-[#890C25] uppercase">
              University Name:
            </span>
            <span> {university_name}</span>
          </h1>
          <div>
            <span className="uppercase text-[#890C25] font-semibold">
              category:
            </span>
            <h1 className="ml-8">subject: {subject_category}</h1>
            <h2 className="ml-8">scholarship: {scholarship_category}</h2>
          </div>
          <h1>
            <span className="font-semibold text-[#890C25] uppercase">
            application fees:
            </span>
            <span> ${application_fees}</span>
          </h1>
          <h1>
            <span className="font-semibold text-[#890C25] uppercase">
            deadline:
            </span>
            <span> {application_deadline}</span>
          </h1>
          <h1 className="flex gap-3">
            <span className="font-semibold text-[#890C25] uppercase">
            rating:
            </span>
            
            <Rating
                style={{ maxWidth: 90 }}
                value={rating}
                readOnly
              />
          </h1>
        </div>
        <div className="mt-8">
          <Link to={`/university/${_id}`}>
            <button className="w-full py-2 rounded-xl bg-[#890C25] text-white uppercase hover:shadow-lg hover:shadow-[#9e6372]">
            Scholarship Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
