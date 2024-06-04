import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#890C25] text-sm hover:underline"
              : "font-semibold  text-sm hover:underline"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#890C25] text-sm hover:underline"
              : "font-semibold  text-sm hover:underline"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-scholarship"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#890C25] text-sm hover:underline"
              : "font-semibold  text-sm hover:underline"
          }
        >
          ALL SCHOLARSHIP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#890C25] text-sm hover:underline"
              : "font-semibold  text-sm hover:underline"
          }
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                  src={user && user.photoURL}
                  alt="profile"
                  height="30"
                  width="30"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={logOut} className="btn btn-sm  btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button className="uppercase font-semibold hover:underline">
                  Login
                </button>
              </Link>
            </li>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 bg-[#F1F3F3] max-w-[1920px] md:px-8 md:py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full"
                src="https://i.ibb.co/4JD0wfW/victory.png"
                alt="logo"
                width="50"
                height="50"
              />
              <div className="text-[#890C25]">
                <h1 className="md:text-xl font-bold uppercase">victory</h1>
                <h2 className="uppercase font-normal text-sm">scholarship</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6 text-sm">{navLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
