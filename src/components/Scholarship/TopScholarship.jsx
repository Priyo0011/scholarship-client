import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ScholarshipCard from "./ScholarshipCard";

const TopScholarship = () => {
  const [scholarship, setScholarship] = useState([]);
  const [sixData, setSixData] = useState([]);

  useEffect(() => {
    const fetchScholarship = async () => {
      try {
        const res = await fetch("http://localhost:9000/university");
        const jsonScholarship = await res.json();
        setScholarship(jsonScholarship);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchScholarship();
  }, []);

  useEffect(() => {
    setSixData(scholarship.slice(0, 6));
  }, [scholarship]);
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
          <button className="px-10 py-4 rounded-full bg-[#890C25] text-white uppercase text-xl hover:shadow-lg hover:shadow-[#9e6372]">
            All scholarship
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopScholarship;
