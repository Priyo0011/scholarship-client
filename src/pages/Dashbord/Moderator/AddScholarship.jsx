import toast from "react-hot-toast";
import { imageUpload } from "../../../api/utils";
import AddScholarshipForm from "../../../components/Form/AddScholarshipForm";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AddScholarship = () => {
  const { user } = useAuth()
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async (scholarshipData) => {
      const { data } = await axiosSecure.post(`/scholarship`, scholarshipData);
      return data;
    },
    onSuccess: () => {
      toast.success("Scholarship Added Successfully!");
      navigate("/dashboard/manage-scholarships");
      setLoading(false);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const scholarship_name = form.scholarship_name.value;
    const university_name = form.university_name.value;
    const university_image = form.university_image.files[0];
    const country = form.country.value;
    const city = form.city.value;
    const university_world_rank = form.university_world_rank.value;
    const subject_category = form.subject_category.value;
    const scholarship_category = form.scholarship_category.value;
    const degree = form.degree.value;
    const tuition_fees = form.tuition_fees.value;
    const application_fees = form.application_fees.value;
    const service_charge = form.service_charge.value;
    const application_deadline = form.application_deadline.value;
    const post_date = form.post_date.value;
    const posted_user_email = form.posted_user_email.value;
    const scholarship_description = form.scholarship_description.value;
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try {
      const image_url = await imageUpload(university_image);
      const scholarshipData = {
        scholarship_name,
        university_name,
        university_image:image_url,
        university_location: {
          country,
          city,
        },
        university_world_rank,
        subject_category,
        scholarship_category,
        degree,
        tuition_fees,
        application_fees,
        service_charge,
        application_deadline,
        post_date,
        posted_user_email,
        scholarship_description,
        host,
      };
      await mutateAsync(scholarshipData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <AddScholarshipForm
        handleSubmit={handleSubmit}
        loading={loading}
      ></AddScholarshipForm>
    </div>
  );
};

export default AddScholarship;
