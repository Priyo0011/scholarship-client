import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user, loading } = useAuth() || {};
  const [role, isLoading] = useRole();

  if (isLoading || loading) return <LoadingSpinner />;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="cover"
          src="https://i.postimg.cc/tJvwXj2Z/equalizer.jpg"
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 uppercase px-4 text-xs text-white bg-[#890C25] rounded-full">
            {role}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <button className="bg-[#890C25] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1">
                  Update Profile
                </button>
                <button className="bg-[#890C25] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
