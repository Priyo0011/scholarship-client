import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DeleteModal from "../../Modal/DeleteModal";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const ReviewRow = (review, refetch) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/reviews/${id}`);
      return data;
    },
    onSuccess: async (data) => {
      console.log(data);
      refetch();
      toast.success("Review Delete");
    },
  });

  //  Handle Delete
  const handleDelete = async (id) => {
    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {review?.review?.reviewInfo?.scholarship_name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {review?.review?.reviewInfo?.university_name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {review?.review?.review_date}
        </p>
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
          id={review?.review?._id}
        />
      </td>
    </tr>
  );
};

export default ReviewRow;
