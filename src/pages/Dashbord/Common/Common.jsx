import useAuth from "../../../hooks/useAuth";

const Common = () => {
  const { user } = useAuth() || {};
  return (
    <div>
      <div className="ml-96 mt-48">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total User</div>
            <div className="stat-value text-primary">10</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total review</div>
            <div className="stat-value text-secondary">4.6</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img alt="profile" src={user?.photoURL} />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">apply scholarship</div>
          </div>
        </div>
      </div>
      <h1 className="text-5xl ml-80 mt-20 text-[#890C25]">
        Welcome to victory scholarship..
      </h1>
    </div>
  );
};

export default Common;
