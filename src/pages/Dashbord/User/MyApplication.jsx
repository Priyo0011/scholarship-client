import { useQuery } from "@tanstack/react-query";
import ApplicationRow from "../../../components/Dashboard/TableRows/ApplicationRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";


const MyApplication = () => {
    const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const {
    data: apply = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['my-apply', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-apply/${user?.email}`)
      return data
    },
   
  })
  if (isLoading) return <LoadingSpinner />
    return (
        <>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        University Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Subject Category
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Application Fees
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Service Charge
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Application Status
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apply.map(apply=>(
                        <ApplicationRow 
                        key={apply._id}
                        apply={apply}
                        refetch={refetch}
                        ></ApplicationRow>
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

export default MyApplication;