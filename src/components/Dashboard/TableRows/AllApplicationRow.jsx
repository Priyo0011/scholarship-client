import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DeleteModal from "../../Modal/DeleteModal";

const AllApplicationRow = ({ apply, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/apply/${id}`);
      return data;
    },
    onSuccess: async (data) => {
      console.log(data);
      refetch();
      toast.success("Apply Canceled");
    },
  });

  //  Handle Delete
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{apply?.user?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {apply?.applyId}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {apply?.university_name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {apply?.scholarship_category}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${apply?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-500 rounded-full"
          ></span>
          <span className="relative text-white">Cancel</span>
        </button>
        <DeleteModal
          handleDelete={handleDelete}
          closeModal={closeModal}
          isOpen={isOpen}
          id={apply?._id}
        />
      </td>
    </tr>
  );
};

export default AllApplicationRow;
