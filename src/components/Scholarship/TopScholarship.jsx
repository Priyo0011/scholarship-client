import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ScholarshipCard from "./ScholarshipCard";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const TopScholarship = () => {
  const [sixData, setSixData] = useState([]);

  const axiosCommon = useAxiosCommon();
  const { data: university = [], isLoading } = useQuery({
    queryKey: ["university"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/university`);
      return data;
    },
  });

  useEffect(() => {
    setSixData(university.slice(0, 6));
  }, [university]);
  if (isLoading) return <LoadingSpinner />;
  return (
    <section className="md:w-[1520px] mx-auto mb-24">
      <div className="my-10">
        <h1 className="text-xl md:text-3xl text-[#890C25] font-bold text-center">
          Top Scholarship
        </h1>
        <p className="mt-8 text-center ">
          Find and compare scholarships for college students, college grants,
          fellowships, <br /> federal financial aid and other forms of student funding
          to cover expenses for international Bachelors, Masters and PhDs
          worldwide.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-16">
        {sixData.map((university) => (
          <ScholarshipCard key={university._id} university={university}></ScholarshipCard>
        ))}
      </div>
      <div className="text-center mt-14">
        <Link to="/all-scholarship">
          <button className="outline px-10 py-2 rounded-full text-[#890C25] uppercase text-xl hover:shadow-lg hover:shadow-[#9e6372]">
            All scholarship
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopScholarship;
