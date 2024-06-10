import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const UpdateScholarshipForm = ({
  handleSubmit,
  handleImage,
  setScholarshipData,
  scholarshipData,
}) => {
    const {user}=useAuth()
    const [startDate, setStartDate] = useState(new Date());
  const [start2Date, setStart2Date] = useState(new Date());
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md shadow-[#890C25] rounded-md mt-6">
      <h1 className="text-3xl font-bold mb-10 uppercase text-[#890C25] text-center underline">
      Update Scholarship
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="md:flex flex-wrap -mx-2 mb-4">
          <div className="w-full  px-2 mb-4 md:mb-0">
            <label className="block text-gray-700">Scholarship Name:</label>
            <input
              type="text"
              name="scholarship"
              value={scholarshipData?.scholarship_name}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, scholarship_name: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
          <div className="w-full  px-2">
            <label className="block text-gray-700">University Name:</label>
            <input
              type="text"
              name="university_name"
              value={scholarshipData?.university_name}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, university_name: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2">
            <label className="block text-gray-700">University Image:</label>
            <input
              type="file"
              name="university_image"
              onChange={e => handleImage(e.target.files[0])}
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full  px-2 mb-4 md:mb-0">
            <label className="block text-gray-700">University Country:</label>
            <input
              type="text"
              name="country"
              value={scholarshipData?.university_location?.country}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, country: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
          <div className="w-full  px-2">
            <label className="block text-gray-700">University City:</label>
            <input
              type="text"
              name="city"
              value={scholarshipData?.university_location?.city}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, country: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full  px-2 mb-4 md:mb-0">
            <label className="block text-gray-700">
              University World Rank:
            </label>
            <input
              type="number"
              name="university_world_rank"
              value={scholarshipData?.university_world_rank}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, university_world_rank: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
          <div className="w-full 2 px-2">
            <label className="block text-gray-700">Subject Category:</label>
            <select
              name="subject_category"
              value={scholarshipData?.subject_category}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, subject_category: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            >
              <option value="">Select</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2 mb-4 md:mb-0">
            <label className="block text-gray-700">Scholarship Category:</label>
            <select
              name="scholarship_category"
              value={scholarshipData?.scholarship_category}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, scholarship_category: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            >
              <option value="">Select</option>
              <option value="Full fund">Full fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-fund</option>
            </select>
          </div>
          <div className="w-full px-2">
            <label className="block text-gray-700">Degree:</label>
            <select
              name="degree"
              value={scholarshipData?.degree}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, degree: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            >
              <option value="">Select</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2 mb-4 md:mb-0">
            <label className="block text-gray-700">
              Tuition Fees (Optional):
            </label>
            <input
              type="number"
              name="tuition_fees"
              value={scholarshipData?.tuition_fees}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, tuition_fees: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
          <div className="w-full  px-2">
            <label className="block text-gray-700">Application Fees:</label>
            <input
              type="number"
              name="application_fees"
              value={scholarshipData?.application_fees}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, application_fees: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full  px-2 mb-4 md:mb-0">
            <label className="block text-gray-700">Service Charge:</label>
            <input
              type="number"
              name="service_charge"
              value={scholarshipData?.service_charge}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, service_charge: e.target.value })
              }
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
          <div className="w-full  px-2">
            <label className="block text-gray-700">Application Deadline:</label>
            <DatePicker
              name="application_deadline"
              value={scholarshipData?.application_deadline}
              className="mt-1  block px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full  px-2 mb-4 md:mb-0">
            <label className="block text-gray-700">
              Scholarship Post Date:
            </label>
            <DatePicker
              disabled
              name="post_date"
              value={scholarshipData?.post_date}
              
              className="mt-1  block px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
              selected={start2Date}
              onChange={(date) => setStart2Date(date)}
            />
          </div>
          <div className="w-full px-2">
            <label className="block text-gray-700">Posted User Email:</label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              name="posted_user_email"
              className="mt-1 block w-full px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2">
            <label className="block text-gray-700">
              Scholarship Description:
            </label>
            <textarea
              type="text"
              name="scholarship_description"
              value={scholarshipData?.scholarship_description}
              onChange={e =>
                setScholarshipData({ ...scholarshipData, scholarship_description: e.target.value })
              }
              className="block w-full px-4 py-3 h-32 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-[#890C25] text-white font-semibold rounded-md hover:bg-[#6e081e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#890C25]"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateScholarshipForm;
