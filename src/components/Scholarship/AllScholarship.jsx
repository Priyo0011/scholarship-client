import { useQuery } from "@tanstack/react-query";

import useAxiosCommon from "../../hooks/useAxiosCommon";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ScholarshipCard from "./ScholarshipCard";

const AllScholarship = () => {
  const axiosCommon = useAxiosCommon();
  const { data: university = [], isLoading } = useQuery({
    queryKey: ["university"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/university`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="md:py-20 py-8 md:px-32">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 m-20">
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#890C25] focus-within:ring-[#db4437]">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#890C25] rounded-md focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid md:grid-cols-3 gap-16">
        {university.map((university) => (
          <ScholarshipCard key={university._id} university={university}></ScholarshipCard>
        ))}
      </div>
    </div>
  );
};

export default AllScholarship;
