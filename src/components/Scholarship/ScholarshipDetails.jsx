import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useParams } from "react-router-dom";

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

        <h1>{university?.university_name}</h1>

    </div>
  );
};

export default ScholarshipDetails;
