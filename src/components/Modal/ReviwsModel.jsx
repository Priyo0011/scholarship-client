import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const ReviwsModel = ({ closeModal2, isOpen2,reviewInfo }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async (reviewData) => {
      const { data } = await axiosSecure.post(`/review`, reviewData);
      return data;
    },
    onSuccess: () => {
      toast.success("Review Added Successfully!");
      navigate("/dashboard/my-review");
      setLoading(false);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const review_date = form.review_date.value;
    const rating_point = form.rating_point.value;
    const reviewer_comments = form.reviewer_comments.value;
    const review_user = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    try {
      const reviewData = {
        review_date,
        rating_point,
        review_user,
        reviewer_comments,
        reviewInfo,
      };
      await mutateAsync(reviewData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <Transition appear show={isOpen2} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal2}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Reserve
                </DialogTitle>
                <div className="bg-gray-100">
                  <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                      review form
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex flex-col">
                        <label
                          htmlFor="review_date"
                          className="mb-2 text-gray-700"
                        >
                          review date
                        </label>
                        <DatePicker
                          disabled
                          name="review_date"
                          className="mt-1 w-full block px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="rating_point"
                          className="mb-2 text-gray-700"
                        >
                          rating point
                        </label>
                        <input
                          type="number"
                          id="rating_point"
                          name="rating_point"
                          min="1"
                          max="5"
                          className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="reviewer_comments"
                          className="mb-2 text-gray-700"
                        >
                          reviewer comments
                        </label>
                        <textarea
                          id="reviewer_comments"
                          name="reviewer_comments"
                          rows="4"
                          className="px-4 py-3 text-gray-800 border border-[#890C25] focus:outline-rose-500 rounded-md"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full px-4 py-3 text-white bg-[#890C25] rounded-md"
                      >
                        {loading ? (
                          <TbFidgetSpinner className="animate-spin m-auto" />
                        ) : (
                          "submit"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReviwsModel;
