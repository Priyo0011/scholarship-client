import toast from "react-hot-toast";
import { imageUpload } from "../../../api/utils";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";


const ApplyForm = () => {
  const { user } = useAuth()
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async (applyData) => {
      const { data } = await axiosSecure.post(`/apply`, applyData);
      return data;
    },
    onSuccess: () => {
      toast.success("Apply Successfully!");
      navigate("/dashboard/my-application");
      setLoading(false);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const phone_number = form.phone_number.value;
    const address = form.address.value;
    const photo = form.photo.files[0];
    const ssc_result = form.ssc_result.value;
    const hsc_result = form.hsc_result.value;
    const applying_degree = form.applying_degree.value;
    const study_gap = form.study_gap.value;
    const gender = form.gender.value;
    const User = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try {
      const image_url = await imageUpload(photo);
      const applyData = {
        phone_number,
        photo:image_url,
        address,
        ssc_result,
        hsc_result,
        applying_degree,
        study_gap,
        User,
        gender
      };
      await mutateAsync(applyData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Applicant Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="phone_number" className="mb-2 text-gray-700">
              phone number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="photo" className="mb-2 text-gray-700">
              photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="mb-2 text-gray-700">
              address (village, district, country)
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="mb-2 text-gray-700">
              gender
            </label>
            <select
              id="gender"
              name="gender"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="applying_degree" className="mb-2 text-gray-700">
              applying degree
            </label>
            <select
              id="applying_degree"
              name="applying_degree"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            >
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor</option>
              <option value="masters">Masters</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="ssc_result" className="mb-2 text-gray-700">
              ssc result
            </label>
            <input
              type="number"
              id="ssc_result"
              name="ssc_result"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="hsc_result" className="mb-2 text-gray-700">
              hsc result
            </label>
            <input
              type="number"
              id="hsc_result"
              name="hsc_result"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="study_gap" className="mb-2 text-gray-700">
              study gap (optional)
            </label>
            <select
              id="study_gap"
              name="study_gap"
              className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            >
              <option value="">None</option>
              <option value="1_year">1 Year</option>
              <option value="2_years">2 Years</option>
              <option value="3_years">3 Years</option>
              <option value="more_than_3_years">More than 3 Years</option>
            </select>
          </div>
          <button
          disabled={loading}
            type="submit"
            className="w-full px-4 py-3 text-white bg-[#890C25] rounded-md"
          >
            {loading ? (
            <TbFidgetSpinner className="animate-spin m-auto" />
          ) : (
            "Submit"
          )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
