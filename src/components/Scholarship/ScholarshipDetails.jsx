import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ScholarshipDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: university = {}, isLoading } = useQuery({
    queryKey: ["university", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/university/${id}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="md:py-32 py-10 md:px-40 px-2">
      <figure>
        <img
          className="md:h-[540px] w-full p-4 "
          src={university.university_image}
          alt=""
        />
      </figure>
      <div className="flex">
        <div className="p-4 w-1/2">
          <div className="space-y-2">
            <h1>
              <span className="font-semibold text-[#890C25] uppercase text-3xl mr-8">
                University Name:
              </span>
              <span className="text-2xl font-light">
                {" "}
                {university.university_name}
              </span>
            </h1>
            <h1>
              <span className="uppercase text-[#890C25] font-semibold text-2xl mr-4">
                subject category:{" "}
              </span>
              <span className=" text-xl bg-lime-100 px-2 rounded-full">
                {university.subject_category}
              </span>
            </h1>

            <h1>
              <span className="uppercase text-[#890C25] font-semibold text-2xl mr-4">
                scholarship category:{" "}
              </span>
              <span className="text-xl bg-yellow-100 px-2 rounded-full">
                {university.scholarship_category}
              </span>
            </h1>

            <h1>
              <span className="font-semibold text-[#890C25] uppercase text-2xl mr-4">
                location :
              </span>
              <span className="text-xl font-light">
                {university.university_location.city},
                {university.university_location.country}
              </span>
            </h1>
            <div className="flex gap-10">
              <h1>
                <span className="font-semibold text-[#890C25] uppercase mr-4">
                  application fees:
                </span>
                <span> ${university.application_fees}</span>
              </h1>
              <h1>
                <span className="font-semibold text-[#890C25] uppercase mr-4">
                  Service Charge:
                </span>
                <span> ${university.service_charge}</span>
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-semibold text-white uppercase bg-green-500 mr-2">
                  Post:
                </span>
                <span> {university.post_date}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white uppercase bg-red-500 mr-2">
                  deadline:
                </span>
                <span> {university.application_deadline}</span>
              </h1>
            </div>
            <h1 className="flex gap-3">
              <span className="font-semibold text-[#890C25] uppercase">
                rating:
              </span>

              <Rating
                style={{ maxWidth: 90 }}
                value={university?.rating}
                readOnly
              />
            </h1>
          </div>
          <div className="mt-8">
            <Link>
              <button className=" px-3 py-2 rounded-xl bg-[#890C25] text-white uppercase hover:shadow-lg hover:shadow-[#9e6372]">
                Apply Scholarship
              </button>
            </Link>
          </div>
        </div>
        <div className="p-6 w-1/2">
          <div>
            <h1 className="text-2xl uppercase text-center text-[#890C25] font-bold">
              Scholarship Description
            </h1>
            <p className="bg-red-50 p-2 text-center font-light">
              {university.scholarship_description}
            </p>
          </div>
          <div>
            <div className="p-4">
              <h1 className="text-2xl uppercase text-center text-[#890C25] font-bold">
                All Review
              </h1>
              <div className="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">
                      Leroy Jenkins
                    </h4>
                    <p className="dark:text-gray-600">
                      Sed non nibh iaculis, posuere diam vitae, consectetur
                      neque. Integer velit ligula, semper sed nisl in, cursus
                      commodo elit. Pellentesque sit amet mi luctus ligula
                      euismod lobortis ultricies et nibh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
