import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { IoHome } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import MenuItem from "./Menu/MenuItem";
import ModeratorMenu from "./Menu/ModeratorMenu";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <>
        {/* Small Screen Navbar */}
        <div className=" text-gray-800 flex justify-between md:hidden">
          <div>
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

          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
          >
            <AiOutlineBars className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-red-50 md:w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className="w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
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
                      <h1 className="md:text-xl font-bold uppercase">
                        victory
                      </h1>
                      <h2 className="uppercase font-normal text-sm">
                        scholarship
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
              {/* Conditional toggle button here.. */}

              
              <nav>
                {/*  user */}
                {role === "user" && <UserMenu></UserMenu>}
                {/* Moderator */}
                {role === "moderator" && <ModeratorMenu></ModeratorMenu>}
                {/*  */}
                {role === "admin" && <AdminMenu></AdminMenu>}
              </nav>
            </div>
          </div>

          <div>
            <hr />

            {/* Profile */}
            <MenuItem 
             label="Home"
             address="/"
             icon={IoHome}>
            </MenuItem>
            <MenuItem
              label="My Profile"
              address="/dashboard/profile"
              icon={VscAccount}
            ></MenuItem>
            <Link
            to='/'
              onClick={logOut}
              
              className="flex w-full items-center px-4 py-2 mt-5 text-[#890C25] hover:bg-[#890C25]   hover:text-white transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
