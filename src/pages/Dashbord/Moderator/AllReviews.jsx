import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import ReviewRow from "../../../components/Dashboard/TableRows/ReviewRow";


const AllReviews = () => {
    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
    return (
        <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Scholarship name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      university name,
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Review date
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Delete button
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <ReviewRow
                      key={review._id}
                      review={review}
                      refetch={refetch}
                    ></ReviewRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default AllReviews;