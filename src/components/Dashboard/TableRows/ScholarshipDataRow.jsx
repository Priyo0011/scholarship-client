import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import DeleteModal from "../../Modal/DeleteModal";
import { useState } from "react";
import UpdateScholarshipModal from "../../Modal/UpdateScholarshipModal";

const ScholarshipDataRow = ({ scholarship, handleDelete,refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {scholarship?.scholarship_category}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {scholarship?.university_name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {scholarship?.subject_category}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {scholarship?.subject_category}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap ml-8">
          ${scholarship?.application_fees}
        </p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-orange-500 rounded-full"
          ></span>
          <Link
            to={`/university/${scholarship?._id}`}
            className="relative text-white font-bold"
          >
            <TbListDetails />
          </Link>
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={() => setIsEditModalOpen(true)} className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-500 rounded-full"
          ></span>
          <span className="relative text-white">
            <FaEdit />
          </span>
        </button>
        <UpdateScholarshipModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          scholarship={scholarship}
          refetch={refetch}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={() => setIsOpen(true)} className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-500 rounded-full"
          ></span>
          <span className="relative text-white">
            <MdDelete />
          </span>
        </button>
        <DeleteModal closeModal={closeModal} isOpen={isOpen} handleDelete={handleDelete}
          id={scholarship?._id}></DeleteModal>
      </td>
    </tr>
  );
};

export default ScholarshipDataRow;
